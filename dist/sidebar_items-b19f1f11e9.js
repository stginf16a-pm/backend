sidebarNodes={"extras":[{"id":"api-reference","title":"API Reference","group":"","headers":[{"id":"Modules","anchor":"modules"}]}],"exceptions":[],"modules":[{"id":"BrettProjekt.Application","title":"BrettProjekt.Application","functions":[{"id":"start/2","anchor":"start/2"}]},{"id":"BrettProjekt.Game","title":"BrettProjekt.Game","functions":[{"id":"add_new_player/2","anchor":"add_new_player/2"},{"id":"apply_pure_function/2","anchor":"apply_pure_function/2"},{"id":"create/1","anchor":"create/1"},{"id":"game_startable?/1","anchor":"game_startable?/1"},{"id":"get_lobby_update_broadcast/1","anchor":"get_lobby_update_broadcast/1"},{"id":"get_mode/1","anchor":"get_mode/1"},{"id":"get_round_preparation_broadcast/1","anchor":"get_round_preparation_broadcast/1"},{"id":"get_state/1","anchor":"get_state/1"},{"id":"name_valid?/1","anchor":"name_valid?/1"},{"id":"set_player_categories/3","anchor":"set_player_categories/3"},{"id":"set_ready/3","anchor":"set_ready/3"},{"id":"start_game/1","anchor":"start_game/1"},{"id":"switch_team/3","anchor":"switch_team/3"}],"types":[{"id":"pure_function/0","anchor":"t:pure_function/0"},{"id":"pure_function_response/0","anchor":"t:pure_function_response/0"}]},{"id":"BrettProjekt.Game.EndGame","title":"BrettProjekt.Game.EndGame"},{"id":"BrettProjekt.Game.Lobby","title":"BrettProjekt.Game.Lobby","functions":[{"id":"add_player/2","anchor":"add_player/2"},{"id":"create_game/1","anchor":"create_game/1"},{"id":"get_update_broadcast/1","anchor":"get_update_broadcast/1"},{"id":"has_player?/2","anchor":"has_player?/2"},{"id":"set_ready/3","anchor":"set_ready/3"},{"id":"switch_team/3","anchor":"switch_team/3"}],"types":[{"id":"lobby_state/0","anchor":"t:lobby_state/0"},{"id":"player_id/0","anchor":"t:player_id/0"},{"id":"t/0","anchor":"t:t/0"},{"id":"team/0","anchor":"t:team/0"},{"id":"team_id/0","anchor":"t:team_id/0"}]},{"id":"BrettProjekt.Game.LobbyStateTransformation","title":"BrettProjekt.Game.LobbyStateTransformation","functions":[{"id":"game_startable?/1","anchor":"game_startable?/1"},{"id":"transform/1","anchor":"transform/1"}]},{"id":"BrettProjekt.Game.Round","title":"BrettProjekt.Game.Round","functions":[{"id":"answer_questions/3","anchor":"answer_questions/3"}]},{"id":"BrettProjekt.Game.RoundEvaluation","title":"BrettProjekt.Game.RoundEvaluation"},{"id":"BrettProjekt.Game.RoundEvaluationStateTransformation","title":"BrettProjekt.Game.RoundEvaluationStateTransformation","functions":[{"id":"transform/1","anchor":"transform/1"},{"id":"transform/3","anchor":"transform/3"}]},{"id":"BrettProjekt.Game.RoundPreparation","title":"BrettProjekt.Game.RoundPreparation","functions":[{"id":"get_broadcast/1","anchor":"get_broadcast/1"},{"id":"set_player_categories/3","anchor":"set_player_categories/3"}],"types":[{"id":"category_id/0","anchor":"t:category_id/0"},{"id":"player_id/0","anchor":"t:player_id/0"},{"id":"t/0","anchor":"t:t/0"},{"id":"team/0","anchor":"t:team/0"},{"id":"team_id/0","anchor":"t:team_id/0"}]},{"id":"BrettProjekt.Game.RoundPreparationStateTransformation","title":"BrettProjekt.Game.RoundPreparationStateTransformation","functions":[{"id":"transform/2","anchor":"transform/2"}]},{"id":"BrettProjekt.Game.RoundStateTransformation","title":"BrettProjekt.Game.RoundStateTransformation","functions":[{"id":"transform/2","anchor":"transform/2"}]},{"id":"BrettProjekt.GameManager","title":"BrettProjekt.GameManager","functions":[{"id":"add_new_game/1","anchor":"add_new_game/1"},{"id":"get_game_by_id/2","anchor":"get_game_by_id/2"},{"id":"start_link/0","anchor":"start_link/0"},{"id":"start_link/1","anchor":"start_link/1"}],"types":[{"id":"game/0","anchor":"t:game/0"},{"id":"game_id/0","anchor":"t:game_id/0"}]},{"id":"BrettProjekt.MonadUtil","title":"BrettProjekt.MonadUtil","functions":[{"id":"unwrap/1","anchor":"unwrap/1"}]},{"id":"BrettProjekt.Question","title":"BrettProjekt.Question","functions":[{"id":"correct_answer/1","anchor":"correct_answer/1"},{"id":"correct_answer/2","anchor":"correct_answer/2"},{"id":"evaluate_answer/2","anchor":"evaluate_answer/2"},{"id":"evaluate_answer/3","anchor":"evaluate_answer/3"}]},{"id":"BrettProjekt.Question.Parser.V1_0","title":"BrettProjekt.Question.Parser.V1_0","functions":[{"id":"get_category_id/2","anchor":"get_category_id/2"},{"id":"get_highest_list_value/2","anchor":"get_highest_list_value/2"},{"id":"parse/1","anchor":"parse/1"},{"id":"to_question_struct/1","anchor":"to_question_struct/1"},{"id":"to_question_structs/1","anchor":"to_question_structs/1"}],"types":[{"id":"category_id/0","anchor":"t:category_id/0"},{"id":"json_object/0","anchor":"t:json_object/0"},{"id":"question_id/0","anchor":"t:question_id/0"},{"id":"question_parsing_error/0","anchor":"t:question_parsing_error/0"},{"id":"question_struct/0","anchor":"t:question_struct/0"}]},{"id":"BrettProjekt.Question.Server","title":"BrettProjekt.Question.Server","functions":[{"id":"get_categories/1","anchor":"get_categories/1"},{"id":"get_question/2","anchor":"get_question/2"},{"id":"get_question_from_category/2","anchor":"get_question_from_category/2"},{"id":"get_questions/1","anchor":"get_questions/1"},{"id":"get_questions_by_categories/3","anchor":"get_questions_by_categories/3"},{"id":"load_questions_from_file/2","anchor":"load_questions_from_file/2"},{"id":"load_questions_from_json/2","anchor":"load_questions_from_json/2"},{"id":"start_link/0","anchor":"start_link/0"},{"id":"start_link/1","anchor":"start_link/1"}],"types":[{"id":"category_id/0","anchor":"t:category_id/0"},{"id":"question/0","anchor":"t:question/0"},{"id":"question_id/0","anchor":"t:question_id/0"},{"id":"team_id/0","anchor":"t:team_id/0"}]},{"id":"BrettProjekt.Question.ServerManager","title":"BrettProjekt.Question.ServerManager","functions":[{"id":"get_question_server/1","anchor":"get_question_server/1"},{"id":"load_questions_from_file/2","anchor":"load_questions_from_file/2"},{"id":"start_link/0","anchor":"start_link/0"},{"id":"start_link/1","anchor":"start_link/1"},{"id":"start_link/2","anchor":"start_link/2"}]},{"id":"BrettProjekt.Question.Type.FillIn","title":"BrettProjekt.Question.Type.FillIn","functions":[{"id":"answer_valid?/2","anchor":"answer_valid?/2"},{"id":"correct_answer/1","anchor":"correct_answer/1"},{"id":"parse/1","anchor":"parse/1"}],"types":[{"id":"question_parsing_error/0","anchor":"t:question_parsing_error/0"}]},{"id":"BrettProjekt.Question.Type.List","title":"BrettProjekt.Question.Type.List","functions":[{"id":"answer_valid?/2","anchor":"answer_valid?/2"},{"id":"correct_answer/1","anchor":"correct_answer/1"},{"id":"parse/1","anchor":"parse/1"}],"types":[{"id":"question_parsing_error/0","anchor":"t:question_parsing_error/0"}]},{"id":"BrettProjekt.Question.Type.Mock","title":"BrettProjekt.Question.Type.Mock","functions":[{"id":"answer_correct?/2","anchor":"answer_correct?/2"},{"id":"answer_valid?/2","anchor":"answer_valid?/2"},{"id":"correct_answer/1","anchor":"correct_answer/1"}]},{"id":"BrettProjekt.Question.Type.MultipleChoice","title":"BrettProjekt.Question.Type.MultipleChoice","functions":[{"id":"correct_answer/1","anchor":"correct_answer/1"},{"id":"parse/1","anchor":"parse/1"}],"types":[{"id":"question_parsing_error/0","anchor":"t:question_parsing_error/0"}]},{"id":"BrettProjekt.Question.Type.Wildcard","title":"BrettProjekt.Question.Type.Wildcard","functions":[{"id":"answer_correct?/2","anchor":"answer_correct?/2"},{"id":"answer_valid?/2","anchor":"answer_valid?/2"},{"id":"parse/1","anchor":"parse/1"}],"types":[{"id":"question_parsing_error/0","anchor":"t:question_parsing_error/0"}]},{"id":"BrettProjekt.Web","title":"BrettProjekt.Web","functions":[{"id":"__using__/1","anchor":"__using__/1"},{"id":"channel/0","anchor":"channel/0"},{"id":"controller/0","anchor":"controller/0"},{"id":"router/0","anchor":"router/0"},{"id":"view/0","anchor":"view/0"}]},{"id":"BrettProjekt.Web.Endpoint","title":"BrettProjekt.Web.Endpoint","functions":[{"id":"__sockets__/0","anchor":"__sockets__/0"},{"id":"broadcast/3","anchor":"broadcast/3"},{"id":"broadcast!/3","anchor":"broadcast!/3"},{"id":"broadcast_from/4","anchor":"broadcast_from/4"},{"id":"broadcast_from!/4","anchor":"broadcast_from!/4"},{"id":"call/2","anchor":"call/2"},{"id":"config/2","anchor":"config/2"},{"id":"config_change/2","anchor":"config_change/2"},{"id":"host/0","anchor":"host/0"},{"id":"init/1","anchor":"init/1"},{"id":"instrument/3","anchor":"instrument/3"},{"id":"load_from_system_env/1","anchor":"load_from_system_env/1"},{"id":"path/1","anchor":"path/1"},{"id":"script_name/0","anchor":"script_name/0"},{"id":"start_link/0","anchor":"start_link/0"},{"id":"static_path/1","anchor":"static_path/1"},{"id":"static_url/0","anchor":"static_url/0"},{"id":"struct_url/0","anchor":"struct_url/0"},{"id":"subscribe/1","anchor":"subscribe/1"},{"id":"subscribe/3","anchor":"subscribe/3"},{"id":"unsubscribe/1","anchor":"unsubscribe/1"},{"id":"url/0","anchor":"url/0"}]},{"id":"BrettProjekt.Web.ErrorHelpers","title":"BrettProjekt.Web.ErrorHelpers","functions":[{"id":"translate_error/1","anchor":"translate_error/1"}]},{"id":"BrettProjekt.Web.ErrorView","title":"BrettProjekt.Web.ErrorView","functions":[{"id":"__phoenix_recompile__?/0","anchor":"__phoenix_recompile__?/0"},{"id":"__resource__/0","anchor":"__resource__/0"},{"id":"__templates__/0","anchor":"__templates__/0"},{"id":"render/2","anchor":"render/2"},{"id":"template_not_found/2","anchor":"template_not_found/2"}]},{"id":"BrettProjekt.Web.GameChannel","title":"BrettProjekt.Web.GameChannel","functions":[{"id":"auth_token_valid?/2","anchor":"auth_token_valid?/2"},{"id":"broadcast_lobby_update/2","anchor":"broadcast_lobby_update/2"},{"id":"broadcast_round_preparation/2","anchor":"broadcast_round_preparation/2"},{"id":"code_change/3","anchor":"code_change/3"},{"id":"handle_in/3","anchor":"handle_in/3"},{"id":"handle_info/2","anchor":"handle_info/2"},{"id":"join/3","anchor":"join/3"},{"id":"terminate/2","anchor":"terminate/2"}]},{"id":"BrettProjekt.Web.Gettext","title":"BrettProjekt.Web.Gettext","functions":[{"id":"dgettext/3","anchor":"dgettext/3"},{"id":"dgettext_noop/2","anchor":"dgettext_noop/2"},{"id":"dngettext/5","anchor":"dngettext/5"},{"id":"dngettext_noop/3","anchor":"dngettext_noop/3"},{"id":"gettext/2","anchor":"gettext/2"},{"id":"gettext_noop/1","anchor":"gettext_noop/1"},{"id":"handle_missing_bindings/2","anchor":"handle_missing_bindings/2"},{"id":"lgettext/4","anchor":"lgettext/4"},{"id":"lngettext/6","anchor":"lngettext/6"},{"id":"ngettext/4","anchor":"ngettext/4"},{"id":"ngettext_noop/2","anchor":"ngettext_noop/2"}]},{"id":"BrettProjekt.Web.MainChannel","title":"BrettProjekt.Web.MainChannel","functions":[{"id":"code_change/3","anchor":"code_change/3"},{"id":"handle_in/3","anchor":"handle_in/3"},{"id":"handle_info/2","anchor":"handle_info/2"},{"id":"join/3","anchor":"join/3"},{"id":"terminate/2","anchor":"terminate/2"}],"types":[{"id":"reply/1","anchor":"t:reply/1"},{"id":"socket/0","anchor":"t:socket/0"}]},{"id":"BrettProjekt.Web.Router","title":"BrettProjekt.Web.Router","functions":[{"id":"api/2","anchor":"api/2"},{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"BrettProjekt.Web.Router.Helpers","title":"BrettProjekt.Web.Router.Helpers","functions":[{"id":"path/2","anchor":"path/2"},{"id":"static_path/2","anchor":"static_path/2"},{"id":"static_url/2","anchor":"static_url/2"},{"id":"url/1","anchor":"url/1"}]},{"id":"BrettProjekt.Web.UserSocket","title":"BrettProjekt.Web.UserSocket","functions":[{"id":"connect/2","anchor":"connect/2"},{"id":"id/1","anchor":"id/1"}]}],"protocols":[],"tasks":[]}