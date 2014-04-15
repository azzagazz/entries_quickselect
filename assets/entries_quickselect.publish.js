(function($) {

	Symphony.Language.add({
		'Select all entries on this page': false
	});

	Quickselect = {
		
		table: null,
		actions: null,
		
		init: function() {
			var self = this;

			this.table = $('#contents > form > table');
			if(this.table.find('tbody tr').length < 2) return;
			
			this.actions = $('#contents > form > .actions');
			this.actions.append('<a href="" class="button entries">' + Symphony.Language.get('Select all entries on this page') + '</a>');
			
			this.actions.find('.entries').on('click', function triggerSelection(e){
				e.preventDefault();

				// TODO :: save already selected state

				// select all non-selected items
				self.table.find('tbody tr:not(.selected)').addClass('selected');
				self.actions.find('fieldset.apply').removeClass('inactive');
				self.actions.find('fieldset.apply select').removeAttr('disabled');

				// TODO :: deselect all non-selected items

			});

		}
		
	};

	$(document).ready(function() {
		Quickselect.init();
	});

})(jQuery.noConflict());