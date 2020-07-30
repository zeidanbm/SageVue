<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Menu extends Component
{
	/**
	 * The alert message.
	 *
	 * @var array
	 */
	public $menu_items;

	/**
	 * Create the component instance.
	 *
	 * @param  string  $type
	 * @param  string  $message
	 * @return void
	 */
	public function __construct()
	{
		$this->menu_items = $this->get_menu_items();
	}

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public function render()
	{
		return $this->view('components.menu');
	}

	private function get_menu_items($theme_location = 'primary_navigation')
	{
		$menu_items = [];
		$locations = get_nav_menu_locations();
		if (isset($locations[$theme_location])) {
			$menu = get_term($locations[$theme_location], 'nav_menu');
			$menu_items = wp_get_nav_menu_items($menu->term_id);
		}
		return $menu_items;
	}
}
