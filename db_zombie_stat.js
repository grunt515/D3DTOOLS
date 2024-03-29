function get_zombie_stat(zombie_name_param, calculation_method_param, attack_type_param) {
	var zombie_name = zombie_name_param;
	var calculation_method = calculation_method_param;
	var attack_type = attack_type_param;
	var zombie_hp = 0;
	var zombie_exp = 0;
	var zombie_dph = 0;
	var zombie_dph_melee = 0;
	var zombie_dph_vomit = 0;
	var zombie_dph_explosion = 0;

	switch (zombie_name) {
		case 'dog':
			zombie_name = 'dog';
			zombie_hp = 20;
			zombie_exp = 20;
			zombie_dph_melee = 10;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'female':
			zombie_name = 'female';
			zombie_hp = 21;
			zombie_exp = 20;
			zombie_dph_melee = 8;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'male':
			zombie_name = 'male';
			zombie_hp = 25;
			zombie_exp = 20;
			zombie_dph_melee = 10;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'fatfemale':
			zombie_name = 'fatfemale';
			zombie_hp = 30;
			zombie_exp = 28;
			zombie_dph_melee = 10;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'fatmale':
			zombie_name = 'fatmale';
			zombie_hp = 34;
			zombie_exp = 30;
			zombie_dph_melee = 12;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'burnedfemale':
			zombie_name = 'burnedfemale';
			zombie_hp = 70;
			zombie_exp = 100;
			zombie_dph_melee = 22;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'irradiatedfemale':
			zombie_name = 'irradiatedfemale';
			zombie_hp = 70;
			zombie_exp = 100;
			zombie_dph_melee = 22;
			zombie_dph_vomit = 20;
			zombie_dph_explosion = 0;
			break;
		case 'burnedmale':
			zombie_name = 'burnedmale';
			zombie_hp = 80;
			zombie_exp = 110;
			zombie_dph_melee = 24;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'irradiatedmale':
			zombie_name = 'irradiatedmale';
			zombie_hp = 80;
			zombie_exp = 110;
			zombie_dph_melee = 24;
			zombie_dph_vomit = 20;
			zombie_dph_explosion = 0;
			break;
		case 'blooddog':
			zombie_name = 'blooddog';
			zombie_hp = 100;
			zombie_exp = 200;
			zombie_dph_melee = 50;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'longarm':
			zombie_name = 'longarm';
			zombie_hp = 140;
			zombie_exp = 250;
			zombie_dph_melee = 40;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'rumbler':
			zombie_name = 'rumbler';
			zombie_hp = 170;
			zombie_exp = 280;
			zombie_dph_melee = 50;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'blacklongarm':
			zombie_name = 'blacklongarm';
			zombie_hp = 200;
			zombie_exp = 360;
			zombie_dph_melee = 55;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'irradiatedlongarm':
			zombie_name = 'irradiatedlongarm';
			zombie_hp = 200;
			zombie_exp = 400;
			zombie_dph_melee = 55;
			zombie_dph_vomit = 110;
			zombie_dph_explosion = 0;
			break;
		case 'fleshhound':
			zombie_name = 'fleshhound';
			zombie_hp = 200;
			zombie_exp = 400;
			zombie_dph_melee = 100;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'blackrumbler':
			zombie_name = 'blackrumbler';
			zombie_hp = 250;
			zombie_exp = 380;
			zombie_dph_melee = 70;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'irradiatedrumbler':
			zombie_name = 'irradiatedrumbler';
			zombie_hp = 250;
			zombie_exp = 380;
			zombie_dph_melee = 50;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 60;
			break;
		case 'siren':
			zombie_name = 'siren';
			zombie_hp = 70;
			zombie_exp = 200;
			zombie_dph_melee = 0;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'smallbloat':
			zombie_name = 'smallbloat';
			zombie_hp = 100;
			zombie_exp = 135;
			zombie_dph_melee = 20;
			zombie_dph_vomit = 20;
			zombie_dph_explosion = 0;
			break;
		case 'bloat':
			zombie_name = 'bloat';
			zombie_hp = 200;
			zombie_exp = 400;
			zombie_dph_melee = 40;
			zombie_dph_vomit = 40;
			zombie_dph_explosion = 0;
			break;
		case 'reaper':
			zombie_name = 'reaper';
			zombie_hp = 200;
			zombie_exp = 300;
			zombie_dph_melee = 50;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'tendril':
			zombie_name = 'tendril';
			zombie_hp = 235;
			zombie_exp = 400;
			zombie_dph_melee = 70;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'bone':
			zombie_name = 'bone';
			zombie_hp = 250;
			zombie_exp = 350;
			zombie_dph_melee = 30;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'spider':
			zombie_name = 'spider';
			zombie_hp = 300;
			zombie_exp = 450;
			zombie_dph_melee = 40;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'blacktendril':
			zombie_name = 'blacktendril';
			zombie_hp = 300;
			zombie_exp = 750;
			zombie_dph_melee = 220;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'brute':
			zombie_name = 'brute';
			zombie_hp = 400;
			zombie_exp = 650;
			zombie_dph_melee = 30;
			zombie_dph_vomit = 40;
			zombie_dph_explosion = 0;
			break;
		case 'leaper':
			zombie_name = 'leaper';
			zombie_hp = 400;
			zombie_exp = 650;
			zombie_dph_melee = 9999;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'hellhound':
			zombie_name = 'hellhound';
			zombie_hp = 600;
			zombie_exp = 1250;
			zombie_dph_melee = 250;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'blackbone':
			zombie_name = 'blackbone';
			zombie_hp = 600;
			zombie_exp = 1500;
			zombie_dph_melee = 180;
			zombie_dph_vomit = 200;
			zombie_dph_explosion = 0;
			break;
		case 'flamingzombie':
			zombie_name = 'flamingzombie';
			zombie_hp = 2500;
			zombie_exp = 3000;
			zombie_dph_melee = 40;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'flaminglongarm':
			zombie_name = 'flaminglongarm';
			zombie_hp = 20000;
			zombie_exp = 40000;
			zombie_dph_melee = 110;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'flamingrumbler':
			zombie_name = 'flamingrumbler';
			zombie_hp = 30000;
			zombie_exp = 60000;
			zombie_dph_melee = 140;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'flamingfleshhound':
			zombie_name = 'flamingfleshhound';
			zombie_hp = 20000;
			zombie_exp = 40000;
			zombie_dph_melee = 180;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'mother':
			zombie_name = 'mother';
			zombie_hp = 7500;
			zombie_exp = 15000;
			zombie_dph_melee = 80;
			zombie_dph_vomit = 80;
			zombie_dph_explosion = 50;
			break;
		case 'flamingmother':
			zombie_name = 'flamingmother';
			zombie_hp = 15000;
			zombie_exp = 22500;
			zombie_dph_melee = 150;
			zombie_dph_vomit = 150;
			zombie_dph_explosion = 100;
			break;
		case 'titan':
			zombie_name = 'titan';
			zombie_hp = 7500;
			zombie_exp = 15000;
			zombie_dph_melee = 80;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'flamingtitan':
			zombie_name = 'flamingtitan';
			zombie_hp = 15000;
			zombie_exp = 22500;
			zombie_dph_melee = 150;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'wraith':
			zombie_name = 'wraith';
			zombie_hp = 15000;
			zombie_exp = 22500;
			zombie_dph_melee = 80;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'flamingwraith':
			zombie_name = 'flamingwraith';
			zombie_hp = 30000;
			zombie_exp = 45000;
			zombie_dph_melee = 150;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'giantspider':
			zombie_name = 'giantspider';
			zombie_hp = 15000;
			zombie_exp = 22500;
			zombie_dph_melee = 80;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'flaminggiantspider':
			zombie_name = 'flaminggiantspider';
			zombie_hp = 30000;
			zombie_exp = 45000;
			zombie_dph_melee = 150;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'blacktitan':
			zombie_name = 'blacktitan';
			zombie_hp = 100000;
			zombie_exp = 200000;
			zombie_dph_melee = 400;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'flamingblacktitan':
			zombie_name = 'flamingblacktitan';
			zombie_hp = 200000;
			zombie_exp = 400000;
			zombie_dph_melee = 800;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'devilhound':
			zombie_name = 'devilhound';
			zombie_hp = 250000;
			zombie_exp = 650000;
			zombie_dph_melee = 700;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'elf':
			zombie_name = 'elf';
			zombie_hp = 150;
			zombie_exp = 300;
			zombie_dph_melee = 24;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'pumpkinhead':
			zombie_name = 'pumpkinhead';
			zombie_hp = 3000;
			zombie_exp = 5000;
			zombie_dph_melee = 50;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 35;
			break;
		case 'egghead':
			zombie_name = 'egghead';
			zombie_hp = 3000;
			zombie_exp = 5000;
			zombie_dph_melee = 50;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 35;
			break;
		case 'santa':
			zombie_name = 'santa';
			zombie_hp = 3000;
			zombie_exp = 5000;
			zombie_dph_melee = 50;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 35;
			break;
		case 'reindeer':
			zombie_name = 'reindeer';
			zombie_hp = 4000;
			zombie_exp = 8000;
			zombie_dph_melee = 75;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		case 'slenderman':
			zombie_name = 'slenderman';
			zombie_hp = 25000;
			zombie_exp = 60000;
			zombie_dph_melee = 9999;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
		default:
			zombie_name = '';
			zombie_hp = 0;
			zombie_exp = 0;
			zombie_dph_melee = 0;
			zombie_dph_vomit = 0;
			zombie_dph_explosion = 0;
			break;
	}


	if (attack_type == 'melee') zombie_dph = zombie_dph_melee;
	else if (attack_type == 'vomit') zombie_dph = zombie_dph_vomit;
	else if (attack_type == 'explosion') zombie_dph = zombie_dph_explosion;
	else if (attack_type == '') zombie_dph = 0;

	if (calculation_method == 'singlezombie') {
		document.getElementById("zombie_hp").value = zombie_hp;
		document.getElementById("zombie_exp").value = zombie_exp;

		document.getElementById("single_zombie_hp").value = zombie_hp;
		document.getElementById("single_zombie_exp").value = zombie_exp;

	} else if (calculation_method == 'zonebased') {
		document.getElementById("zombie_boss_hp").value = zombie_hp;
		document.getElementById("zombie_boss_exp").value = zombie_exp;
		document.getElementById("zombie_boss_spawn").value = 0;
		document.getElementById("zombie_boss_total_hp").value = 0;
		document.getElementById("zombie_boss_total_exp").value = 0;

		document.getElementById("zombie_boss_spawn").disabled = false;
		sum_boss_stat(0, 0, 0);
	} else if (calculation_method == 'enemy_zombie') {
		document.getElementById("enemy_zombie_base_dph").value = zombie_dph;
		document.getElementById("enemy_zombie_critical_hit_dph").value = zombie_dph;

		document.getElementById("total_added_enemy_base_dph").value = zombie_dph;
		document.getElementById("total_added_enemy_critical_hit_dph").value = zombie_dph;

	} else if (calculation_method == 'zombie_player') {
		document.getElementById("zombie_player_endurance_point").value = zombie_hp;

	}
}