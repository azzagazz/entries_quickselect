<?php

	if(!defined("__IN_SYMPHONY__")) die("<h2>Error</h2><p>You cannot directly access this file</p>");

	Class extension_entries_quickselect extends Extension {
	
		public function getSubscribedDelegates() {
			return array(
				array(
					'page'		=> '/backend/',
					'delegate'	=> 'InitaliseAdminPageHead',
					'callback'	=> 'appendAssets'
				)
			);
		}
	
		public function appendAssets($context) {

			$callback = Administration::instance()->getPageCallback();

			// add stylesheet & script to header
			if($callback['driver'] == 'publish' && $callback['context']['page'] == 'index'){
				Administration::instance()->Page->addStylesheetToHead(URL . '/extensions/entries_quickselect/assets/entries_quickselect.publish.css', 'screen', 100);
				Administration::instance()->Page->addScriptToHead(URL . '/extensions/entries_quickselect/assets/entries_quickselect.publish.js', 101, false);
			}
			
		}
	
	}
