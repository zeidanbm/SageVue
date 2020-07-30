<ul class="flex flex-row">
    @foreach($menu_items as $item)
        <li id="menu-item-{{ $item->ID }}">
            <a href="{{ $item->url }}" aria-current="page">{{ $item->title }}</a>
        </li>
    @endforeach
</ul>
