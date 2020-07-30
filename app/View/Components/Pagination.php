<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

class Alert extends Component
{
	/**
	 * The next link.
	 *
	 * @var string
	 */
	public $next_link;

	/**
	 * The pre link.
	 *
	 * @var string
	 */
	public $pre_link;

	/**
	 * The next class.
	 *
	 * @var string
	 */
	public $next_class;

	/**
	 * The pre class.
	 *
	 * @var string
	 */
	public $pre_class;

	/**
	 * The total number of pages.
	 *
	 * @var integer
	 */
	public $total;

	/**
	 * The number of pages to split after.
	 *
	 * @var integer
	 */
	public $split;

	/**
	 * The current page.
	 *
	 * @var integer
	 */
	public $page;

	/**
	 * Create the component instance.
	 *
	 * @param  integer  $total
	 * @param  integer  $split
	 * @return void
	 */
	public function __construct($total, $split = 10, $page = 1, $link = '', $class = 'disabled')
	{
		$this->total = $total;
		$this->split = $split;
		$this->page = $page;
		$this->next_link = $this->pre_link = $link;
		$this->next_class = $this->pre_class = $class;
	}

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public function render()
	{
		return $this->view('components.pagination');
	}
}
