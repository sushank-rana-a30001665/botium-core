module.exports = {
  PROJECTNAME: 'PROJECTNAME',
  TEMPDIR: 'TEMPDIR',
  CLEANUPTEMPDIR: 'CLEANUPTEMPDIR',
  WAITFORBOTTIMEOUT: 'WAITFORBOTTIMEOUT',
  // "docker" "fbdirect" "watsonconversation", "simplerest", "webspeech", "inprocess"
  CONTAINERMODE: 'CONTAINERMODE',
  STARTCMD: 'STARTCMD',
  // falsy or ms/keystroke
  SIMULATE_WRITING_SPEED: 'SIMULATE_WRITING_SPEED',
  DOCKERCOMPOSEPATH: 'DOCKERCOMPOSEPATH',
  DOCKERMACHINEPATH: 'DOCKERMACHINEPATH',
  DOCKERMACHINE: 'DOCKERMACHINE',
  DOCKERIMAGE: 'DOCKERIMAGE',
  DOCKERUNIQUECONTAINERNAMES: 'DOCKERUNIQUECONTAINERNAMES',
  DOCKERSYSLOGPORT: 'DOCKERSYSLOGPORT',
  DOCKERSYSLOGPORT_RANGE: 'DOCKERSYSLOGPORT_RANGE',
  BOTIUMGRIDURL: 'BOTIUMGRIDURL',
  BOTIUMAPITOKEN: 'BOTIUMAPITOKEN',
  BOTIUMGRIDSLOT: 'BOTIUMGRIDSLOT',
  // General Mocker Settings
  BOT_HEALTH_STATUS: 'BOT_HEALTH_STATUS',
  BOT_HEALTH_CHECK_PATH: 'BOT_HEALTH_CHECK_PATH',
  BOT_HEALTH_CHECK_VERB: 'BOT_HEALTH_CHECK_VERB',
  // Facebook Mocker Settings
  FACEBOOK_API: 'FACEBOOK_API',
  FACEBOOK_WEBHOOK_PORT: 'FACEBOOK_WEBHOOK_PORT',
  FACEBOOK_WEBHOOK_PATH: 'FACEBOOK_WEBHOOK_PATH',
  FACEBOOK_PUBLISHPORT: 'FACEBOOK_PUBLISHPORT',
  FACEBOOK_PUBLISHPORT_RANGE: 'FACEBOOK_PUBLISHPORT_RANGE',
  FACEBOOK_SEND_DELIVERY_CONFIRMATION: 'FACEBOOK_SEND_DELIVERY_CONFIRMATION',
  // Slack Mocker Settings
  SLACK_API: 'SLACK_API',
  SLACK_EVENT_PORT: 'SLACK_EVENT_PORT',
  SLACK_EVENT_PATH: 'SLACK_EVENT_PATH',
  SLACK_OAUTH_PORT: 'SLACK_OAUTH_PORT',
  SLACK_OAUTH_PATH: 'SLACK_OAUTH_PATH',
  SLACK_PUBLISHPORT: 'SLACK_PUBLISHPORT',
  SLACK_PUBLISHPORT_RANGE: 'SLACK_PUBLISHPORT_RANGE',
  // Facebook Direct API Settings
  FB_PAGEID: 'FB_PAGEID',
  FB_USER: 'FB_USER',
  FB_PASSWORD: 'FB_PASSWORD',
  // Bot Framework Mocker Settings
  BOTFRAMEWORK_API: 'BOTFRAMEWORK_API',
  BOTFRAMEWORK_APP_ID: 'BOTFRAMEWORK_APP_ID',
  BOTFRAMEWORK_CHANNEL_ID: 'BOTFRAMEWORK_CHANNEL_ID',
  BOTFRAMEWORK_WEBHOOK_PORT: 'BOTFRAMEWORK_WEBHOOK_PORT',
  BOTFRAMEWORK_WEBHOOK_PATH: 'BOTFRAMEWORK_WEBHOOK_PATH',
  BOTFRAMEWORK_PUBLISHPORT: 'BOTFRAMEWORK_PUBLISHPORT',
  BOTFRAMEWORK_PUBLISHPORT_RANGE: 'BOTFRAMEWORK_PUBLISHPORT_RANGE',

  // Simple Reset Bot Settings
  SIMPLEREST_PING_URL: 'SIMPLEREST_PING_URL',
  SIMPLEREST_PING_VERB: 'SIMPLEREST_PING_VERB',
  SIMPLEREST_PING_BODY: 'SIMPLEREST_PING_BODY',
  SIMPLEREST_PING_RETRIES: 'SIMPLEREST_PING_RETRIES',
  SIMPLEREST_PING_TIMEOUT: 'SIMPLEREST_PING_TIMEOUT',
  SIMPLEREST_INIT_CONTEXT: 'SIMPLEREST_INIT_CONTEXT',
  SIMPLEREST_INIT_TEXT: 'SIMPLEREST_INIT_TEXT',
  SIMPLEREST_URL: 'SIMPLEREST_URL',
  SIMPLEREST_METHOD: 'SIMPLEREST_METHOD',
  SIMPLEREST_HEADERS_TEMPLATE: 'SIMPLEREST_HEADERS_TEMPLATE',
  SIMPLEREST_BODY_TEMPLATE: 'SIMPLEREST_BODY_TEMPLATE',
  SIMPLEREST_BODY_RAW: 'SIMPLEREST_BODY_RAW',
  SIMPLEREST_REQUEST_HOOK: 'SIMPLEREST_REQUEST_HOOK',
  SIMPLEREST_RESPONSE_JSONPATH: 'SIMPLEREST_RESPONSE_JSONPATH',
  SIMPLEREST_RESPONSE_HOOK: 'SIMPLEREST_RESPONSE_HOOK',
  SIMPLEREST_MEDIA_JSONPATH: 'SIMPLEREST_MEDIA_JSONPATH',
  SIMPLEREST_BUTTONS_JSONPATH: 'SIMPLEREST_BUTTONS_JSONPATH',
  SIMPLEREST_CONTEXT_JSONPATH: 'SIMPLEREST_CONTEXT_JSONPATH',
  SIMPLEREST_CONVERSATION_ID_TEMPLATE: 'SIMPLEREST_CONVERSATION_ID_TEMPLATE',
  SIMPLEREST_STEP_ID_TEMPLATE: 'SIMPLEREST_STEP_ID_TEMPLATE',
  // Webspeech Settings
  WEBSPEECH_SERVER_PORT: 'WEBSPEECH_SERVER_PORT',
  WEBSPEECH_LANGUAGE: 'WEBSPEECH_LANGUAGE',
  WEBSPEECH_PITCH: 'WEBSPEECH_PITCH',
  WEBSPEECH_RATE: 'WEBSPEECH_RATE',
  WEBSPEECH_VOLUME: 'WEBSPEECH_VOLUME',
  WEBSPEECH_VOICE: 'WEBSPEECH_VOICE',
  WEBSPEECH_CLOSEBROWSER: 'WEBSPEECH_CLOSEBROWSER',
  WEBSPEECH_BROWSER_APP: 'WEBSPEECH_BROWSER_APP',
  // Script Compiler
  SCRIPTING_TXT_EOL: 'SCRIPTING_TXT_EOL',
  // ROW_PER_MESSAGE or QUESTION_ANSWER
  SCRIPTING_XLSX_MODE: 'SCRIPTING_XLSX_MODE',
  SCRIPTING_XLSX_EOL_WRITE: 'SCRIPTING_XLSX_EOL_WRITE',
  SCRIPTING_XLSX_STARTROW: 'SCRIPTING_XLSX_STARTROW',
  SCRIPTING_XLSX_STARTCOL: 'SCRIPTING_XLSX_STARTCOL',
  SCRIPTING_XLSX_SHEETNAMES: 'SCRIPTING_XLSX_SHEETNAMES',
  SCRIPTING_XLSX_SHEETNAMES_PCONVOS: 'SCRIPTING_XLSX_SHEETNAMES_PCONVOS',
  SCRIPTING_XLSX_SHEETNAMES_UTTERANCES: 'SCRIPTING_XLSX_SHEETNAMES_UTTERANCES',
  SCRIPTING_XLSX_SHEETNAMES_SCRIPTING_MEMORY: 'SCRIPTING_XLSX_SHEETNAMES_SCRIPTING_MEMORY',
  SCRIPTING_CSV_SEPARATOR: 'SCRIPTING_CSV_SEPARATOR',
  SCRIPTING_CSV_USE_HEADER: 'SCRIPTING_CSV_USE_HEADER',
  // ROW_PER_MESSAGE or QUESTION_ANSWER
  SCRIPTING_CSV_MODE: 'SCRIPTING_CSV_MODE',
  SCRIPTING_CSV_MODE_ROW_PER_MESSAGE_COL_CONVERSATION_ID: 'SCRIPTING_CSV_MODE_ROW_PER_MESSAGE_COL_CONVERSATION_ID',
  SCRIPTING_CSV_MODE_ROW_PER_MESSAGE_COL_SENDER: 'SCRIPTING_CSV_MODE_ROW_PER_MESSAGE_COL_SENDER',
  SCRIPTING_CSV_MODE_ROW_PER_MESSAGE_COL_TEXT: 'SCRIPTING_CSV_MODE_ROW_PER_MESSAGE_COL_TEXT',
  SCRIPTING_CSV_MODE_QUESTION_ANSWER_COL_QUESTION: 'SCRIPTING_CSV_MODE_QUESTION_ANSWER_COL_QUESTION',
  SCRIPTING_CSV_MODE_QUESTION_ANSWER_COL_ANSWER: 'SCRIPTING_CSV_MODE_QUESTION_ANSWER_COL_ANSWER',
  SCRIPTING_NORMALIZE_TEXT: 'SCRIPTING_NORMALIZE_TEXT',
  SCRIPTING_ENABLE_MEMORY: 'SCRIPTING_ENABLE_MEMORY',
  SCRIPTING_ENABLE_MULTIPLE_ASSERT_ERRORS: 'SCRIPTING_ENABLE_MULTIPLE_ASSERT_ERRORS',
  // regexp, regexpIgnoreCase, wildcard, wildcardIgnoreCase, include, includeIgnoreCase, equals
  SCRIPTING_MATCHING_MODE: 'SCRIPTING_MATCHING_MODE',
  // all, first, random
  SCRIPTING_UTTEXPANSION_MODE: 'SCRIPTING_UTTEXPANSION_MODE',
  SCRIPTING_UTTEXPANSION_RANDOM_COUNT: 'SCRIPTING_UTTEXPANSION_RANDOM_COUNT',
  SCRIPTING_UTTEXPANSION_INCOMPREHENSION: 'SCRIPTING_UTTEXPANSION_INCOMPREHENSION',
  // Del original convo or not
  SCRIPTING_MEMORYEXPANSION_KEEP_ORIG: 'SCRIPTING_MEMORYEXPANSION_KEEP_ORIG',
  // word, non_whitespace, joker
  SCRIPTING_MEMORY_MATCHING_MODE: 'SCRIPTING_MEMORY_MATCHING_MODE',
  // Botium Lifecycle Hooks
  CUSTOMHOOK_ONBUILD: 'CUSTOMHOOK_ONBUILD',
  CUSTOMHOOK_ONSTART: 'CUSTOMHOOK_ONSTART',
  CUSTOMHOOK_ONSTOP: 'CUSTOMHOOK_ONSTOP',
  CUSTOMHOOK_ONCLEAN: 'CUSTOMHOOK_ONCLEAN',
  // Retry logic
  RETRY_USERSAYS_ONERROR_REGEXP: 'RETRY_USERSAYS_ONERROR_REGEXP',
  RETRY_USERSAYS_NUMRETRIES: 'RETRY_USERSAYS_NUMRETRIES',
  RETRY_USERSAYS_FACTOR: 'RETRY_USERSAYS_FACTOR',
  RETRY_USERSAYS_MINTIMEOUT: 'RETRY_USERSAYS_MINTIMEOUT',
  // Extension components
  ASSERTERS: 'ASSERTERS',
  LOGIC_HOOKS: 'LOGIC_HOOKS',
  USER_INPUTS: 'USER_INPUTS'
}
