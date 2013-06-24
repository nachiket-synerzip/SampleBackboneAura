// ## Permissions Extension
// @fileOverview Extend the aura-core permissions
define(['aura_perms'], function (permissions) {

    permissions.extend({
    	widget: {
            "Button.clicked": true
        }
    });

    return permissions;

});
