import { NotifierDTO } from 'app/types';

export const grafanaNotifiersMock: NotifierDTO[] = [
  {
    type: 'teams',
    name: 'Microsoft Teams',
    heading: 'Teams settings',
    description: 'Sends notifications using Incoming Webhook connector to Microsoft Teams',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'URL',
        description: '',
        placeholder: 'Teams incoming webhook url',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'dingding',
    name: 'DingDing',
    heading: 'DingDing settings',
    description: 'Sends HTTP POST request to DingDing',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Url',
        description: '',
        placeholder: 'https://oapi.dingtalk.com/robot/send?access_token=xxxxxxxxx',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'select',
        inputType: '',
        label: 'Message Type',
        description: '',
        placeholder: '',
        propertyName: 'msgType',
        selectOptions: [
          { value: 'link', label: 'Link' },
          { value: 'actionCard', label: 'ActionCard' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'googlechat',
    name: 'Google Hangouts Chat',
    heading: 'Google Hangouts Chat settings',
    description: 'Sends notifications to Google Hangouts Chat via webhooks based on the official JSON message format',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Url',
        description: '',
        placeholder: 'Google Hangouts Chat incoming webhook url',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'hipchat',
    name: 'HipChat',
    heading: 'HipChat settings',
    description: 'Sends notifications uto a HipChat Room',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Hip Chat Url',
        description: '',
        placeholder: 'HipChat URL (ex https://grafana.hipchat.com)',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'API Key',
        description: '',
        placeholder: 'HipChat API Key',
        propertyName: 'apiKey',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Room ID',
        description: '',
        placeholder: '',
        propertyName: 'roomid',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'webhook',
    name: 'webhook',
    heading: 'Webhook settings',
    description: 'Sends HTTP POST request to a URL',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Url',
        description: '',
        placeholder: '',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'select',
        inputType: '',
        label: 'Http Method',
        description: '',
        placeholder: '',
        propertyName: 'httpMethod',
        selectOptions: [
          { value: 'POST', label: 'POST' },
          { value: 'PUT', label: 'PUT' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Username',
        description: '',
        placeholder: '',
        propertyName: 'username',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'password',
        label: 'Password',
        description: '',
        placeholder: '',
        propertyName: 'password',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: true,
      },
    ],
  },
  {
    type: 'kafka',
    name: 'Kafka REST Proxy',
    heading: 'Kafka settings',
    description: 'Sends notifications to Kafka Rest Proxy',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Kafka REST Proxy',
        description: '',
        placeholder: 'http://localhost:8082',
        propertyName: 'kafkaRestProxy',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Topic',
        description: '',
        placeholder: 'topic1',
        propertyName: 'kafkaTopic',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'sensu',
    name: 'Sensu',
    heading: 'Sensu settings',
    description: 'Sends HTTP POST request to a Sensu API',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Url',
        description: '',
        placeholder: 'http://sensu-api.local:4567/results',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Source',
        description: 'If empty rule id will be used',
        placeholder: '',
        propertyName: 'source',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Handler',
        description: '',
        placeholder: 'default',
        propertyName: 'handler',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Username',
        description: '',
        placeholder: '',
        propertyName: 'username',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'password',
        label: 'Password',
        description: '',
        placeholder: '',
        propertyName: 'passsword ',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: true,
      },
    ],
  },
  {
    type: 'threema',
    name: 'Threema Gateway',
    heading: 'Threema Gateway settings',
    description: 'Sends notifications to Threema using the Threema Gateway',
    info:
      'Notifications can be configured for any Threema Gateway ID of type "Basic". End-to-End IDs are not currently supported.The Threema Gateway ID can be set up at https://gateway.threema.ch/.',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Gateway ID',
        description: 'Your 8 character Threema Gateway ID (starting with a *).',
        placeholder: '*3MAGWID',
        propertyName: 'gateway_id',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '\\*[0-9A-Z]{7}',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Recipient ID',
        description: 'The 8 character Threema ID that should receive the alerts.',
        placeholder: 'YOUR3MID',
        propertyName: 'recipient_id',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '[0-9A-Z]{8}',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'API Secret',
        description: 'Your Threema Gateway API secret.',
        placeholder: '',
        propertyName: 'api_secret',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
      },
    ],
  },
  {
    type: 'LINE',
    name: 'LINE',
    heading: 'LINE notify settings',
    description: 'Send notifications to LINE notify',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Token',
        description: '',
        placeholder: 'LINE notify token key',
        propertyName: 'token',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
      },
    ],
  },
  {
    type: 'opsgenie',
    name: 'OpsGenie',
    heading: 'OpsGenie settings',
    description: 'Sends notifications to OpsGenie',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'API Key',
        description: '',
        placeholder: 'OpsGenie API Key',
        propertyName: 'apiKey',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Alert API Url',
        description: '',
        placeholder: 'https://api.opsgenie.com/v2/alerts',
        propertyName: 'apiUrl',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'checkbox',
        inputType: '',
        label: 'Auto close incidents',
        description: 'Automatically close alerts in OpsGenie once the alert goes back to ok.',
        placeholder: '',
        propertyName: 'autoClose',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'checkbox',
        inputType: '',
        label: 'Override priority',
        description: 'Allow the alert priority to be set using the og_priority tag',
        placeholder: '',
        propertyName: 'overridePriority',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'select',
        inputType: '',
        label: 'Send notification tags as',
        description: 'Send the notification tags to Opsgenie as either Extra Properties, Tags or both',
        placeholder: '',
        propertyName: 'sendTagsAs',
        selectOptions: [
          { value: 'tags', label: 'Tags' },
          { value: 'details', label: 'Extra Properties' },
          { value: 'both', label: 'Tags \u0026 Extra Properties' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'pushover',
    name: 'Pushover',
    heading: 'Pushover settings',
    description: 'Sends HTTP POST request to the Pushover API',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'API Token',
        description: '',
        placeholder: 'Application token',
        propertyName: 'apiToken',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'User key(s)',
        description: '',
        placeholder: 'comma-separated list',
        propertyName: 'userKey',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Device(s) (optional)',
        description: '',
        placeholder: 'comma-separated list; leave empty to send to all devices',
        propertyName: 'device',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'select',
        inputType: '',
        label: 'Alerting priority',
        description: '',
        placeholder: '',
        propertyName: 'priority',
        selectOptions: [
          { value: '2', label: 'Emergency' },
          { value: '1', label: 'High' },
          { value: '0', label: 'Normal' },
          { value: '-1', label: 'Low' },
          { value: '-2', label: 'Lowest' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'select',
        inputType: '',
        label: 'OK priority',
        description: '',
        placeholder: '',
        propertyName: 'okPriority',
        selectOptions: [
          { value: '2', label: 'Emergency' },
          { value: '1', label: 'High' },
          { value: '0', label: 'Normal' },
          { value: '-1', label: 'Low' },
          { value: '-2', label: 'Lowest' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Retry (Only used for Emergency Priority)',
        description:
          'How often (in seconds) the Pushover servers will send the same alerting or OK notification to the user.',
        placeholder: 'minimum 30 seconds',
        propertyName: 'retry',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Expire (Only used for Emergency Priority)',
        description: 'How many seconds the alerting or OK notification will continue to be retried.',
        placeholder: 'maximum 86400 seconds',
        propertyName: 'expire',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'select',
        inputType: '',
        label: 'Alerting sound',
        description: '',
        placeholder: '',
        propertyName: 'sound',
        selectOptions: [
          { value: 'default', label: 'Default' },
          { value: 'pushover', label: 'Pushover' },
          { value: 'bike', label: 'Bike' },
          { value: 'bugle', label: 'Bugle' },
          { value: 'cashregister', label: 'Cashregister' },
          { value: 'classical', label: 'Classical' },
          { value: 'cosmic', label: 'Cosmic' },
          { value: 'falling', label: 'Falling' },
          { value: 'gamelan', label: 'Gamelan' },
          { value: 'incoming', label: 'Incoming' },
          { value: 'intermission', label: 'Intermission' },
          { value: 'magic', label: 'Magic' },
          { value: 'mechanical', label: 'Mechanical' },
          { value: 'pianobar', label: 'Pianobar' },
          { value: 'siren', label: 'Siren' },
          { value: 'spacealarm', label: 'Spacealarm' },
          { value: 'tugboat', label: 'Tugboat' },
          { value: 'alien', label: 'Alien' },
          { value: 'climb', label: 'Climb' },
          { value: 'persistent', label: 'Persistent' },
          { value: 'echo', label: 'Echo' },
          { value: 'updown', label: 'Updown' },
          { value: 'none', label: 'None' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'select',
        inputType: '',
        label: 'OK sound',
        description: '',
        placeholder: '',
        propertyName: 'okSound',
        selectOptions: [
          { value: 'default', label: 'Default' },
          { value: 'pushover', label: 'Pushover' },
          { value: 'bike', label: 'Bike' },
          { value: 'bugle', label: 'Bugle' },
          { value: 'cashregister', label: 'Cashregister' },
          { value: 'classical', label: 'Classical' },
          { value: 'cosmic', label: 'Cosmic' },
          { value: 'falling', label: 'Falling' },
          { value: 'gamelan', label: 'Gamelan' },
          { value: 'incoming', label: 'Incoming' },
          { value: 'intermission', label: 'Intermission' },
          { value: 'magic', label: 'Magic' },
          { value: 'mechanical', label: 'Mechanical' },
          { value: 'pianobar', label: 'Pianobar' },
          { value: 'siren', label: 'Siren' },
          { value: 'spacealarm', label: 'Spacealarm' },
          { value: 'tugboat', label: 'Tugboat' },
          { value: 'alien', label: 'Alien' },
          { value: 'climb', label: 'Climb' },
          { value: 'persistent', label: 'Persistent' },
          { value: 'echo', label: 'Echo' },
          { value: 'updown', label: 'Updown' },
          { value: 'none', label: 'None' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'sensugo',
    name: 'Sensu Go',
    heading: 'Sensu Go Settings',
    description: 'Sends HTTP POST request to a Sensu Go API',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Backend URL',
        description: '',
        placeholder: 'http://sensu-api.local:8080',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'password',
        label: 'API Key',
        description: 'API Key to auth to Sensu Go backend',
        placeholder: '',
        propertyName: 'apikey',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Proxy entity name',
        description: 'If empty, rule name will be used',
        placeholder: '',
        propertyName: 'entity',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Check name',
        description: 'If empty, rule id will be used',
        placeholder: '',
        propertyName: 'check',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Handler',
        description: '',
        placeholder: '',
        propertyName: 'handler',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Namespace',
        description: '',
        placeholder: 'default',
        propertyName: 'namespace',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'prometheus-alertmanager',
    name: 'Prometheus Alertmanager',
    heading: 'Alertmanager settings',
    description: 'Sends alert to Prometheus Alertmanager',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Url',
        description:
          'As specified in Alertmanager documentation, do not specify a load balancer here. Enter all your Alertmanager URLs comma-separated.',
        placeholder: 'http://localhost:9093',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Basic Auth User',
        description: '',
        placeholder: '',
        propertyName: 'basicAuthUser',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'password',
        label: 'Basic Auth Password',
        description: '',
        placeholder: '',
        propertyName: 'basicAuthPassword',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: true,
      },
    ],
  },
  {
    type: 'discord',
    name: 'Discord',
    heading: 'Discord settings',
    description: 'Sends notifications to Discord',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Message Content',
        description: 'Mention a group using @ or a user using \u003c@ID\u003e when notifying in a channel',
        placeholder: '',
        propertyName: 'content',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Webhook URL',
        description: '',
        placeholder: 'Discord webhook URL',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'email',
    name: 'Email',
    heading: 'Email settings',
    description: 'Sends notifications using Grafana server configured SMTP settings',
    info: '',
    options: [
      {
        element: 'checkbox',
        inputType: '',
        label: 'Single email',
        description: 'Send a single email to all recipients',
        placeholder: '',
        propertyName: 'singleEmail',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'textarea',
        inputType: '',
        label: 'Addresses',
        description: 'You can enter multiple email addresses using a ";" separator',
        placeholder: '',
        propertyName: 'addresses',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'victorops',
    name: 'VictorOps',
    heading: 'VictorOps settings',
    description: 'Sends notifications to VictorOps',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Url',
        description: '',
        placeholder: 'VictorOps url',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
      {
        element: 'checkbox',
        inputType: '',
        label: 'Auto resolve incidents',
        description: 'Resolve incidents in VictorOps once the alert goes back to ok.',
        placeholder: '',
        propertyName: 'autoResolve',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'pagerduty',
    name: 'PagerDuty',
    heading: 'PagerDuty settings',
    description: 'Sends notifications to PagerDuty',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Integration Key',
        description: '',
        placeholder: 'Pagerduty Integration Key',
        propertyName: 'integrationKey',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
      },
      {
        element: 'select',
        inputType: '',
        label: 'Severity',
        description: '',
        placeholder: '',
        propertyName: 'severity',
        selectOptions: [
          { value: 'critical', label: 'Critical' },
          { value: 'error', label: 'Error' },
          { value: 'warning', label: 'Warning' },
          { value: 'info', label: 'Info' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'checkbox',
        inputType: '',
        label: 'Auto resolve incidents',
        description: 'Resolve incidents in pagerduty once the alert goes back to ok.',
        placeholder: '',
        propertyName: 'autoResolve',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'checkbox',
        inputType: '',
        label: 'Include message in details',
        description:
          'Move the alert message from the PD summary into the custom details. This changes the custom details object and may break event rules you have configured',
        placeholder: '',
        propertyName: 'messageInDetails',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
    ],
  },
  {
    type: 'slack',
    name: 'Slack',
    heading: 'Slack settings',
    description: 'Sends notifications to Slack',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Recipient',
        description:
          'Specify channel or user, use #channel-name, @username (has to be all lowercase, no whitespace), or user/channel Slack ID - required unless you provide a webhook',
        placeholder: '',
        propertyName: 'recipient',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Token',
        description: 'Provide a Slack API token (starts with "xoxb") - required unless you provide a webhook',
        placeholder: '',
        propertyName: 'token',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: true,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Username',
        description: "Set the username for the bot's message",
        placeholder: '',
        propertyName: 'username',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Icon emoji',
        description: "Provide an emoji to use as the icon for the bot's message. Overrides the icon URL.",
        placeholder: '',
        propertyName: 'iconEmoji',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Icon URL',
        description: "Provide a URL to an image to use as the icon for the bot's message",
        placeholder: '',
        propertyName: 'iconUrl',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Mention Users',
        description:
          "Mention one or more users (comma separated) when notifying in a channel, by ID (you can copy this from the user's Slack profile)",
        placeholder: '',
        propertyName: 'mentionUsers',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Mention Groups',
        description:
          "Mention one or more groups (comma separated) when notifying in a channel (you can copy this from the group's Slack profile URL)",
        placeholder: '',
        propertyName: 'mentionGroups',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'select',
        inputType: '',
        label: 'Mention Channel',
        description: 'Mention whole channel or just active members when notifying',
        placeholder: '',
        propertyName: 'mentionChannel',
        selectOptions: [
          { value: '', label: 'Disabled' },
          { value: 'here', label: 'Every active channel member' },
          { value: 'channel', label: 'Every channel member' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Webhook URL',
        description:
          "Optionally provide a Slack incoming webhook URL for sending messages, in this case the token isn't necessary",
        placeholder: 'Slack incoming webhook URL',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: true,
      },
    ],
  },
  {
    type: 'telegram',
    name: 'Telegram',
    heading: 'Telegram API settings',
    description: 'Sends notifications to Telegram',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'BOT API Token',
        description: '',
        placeholder: 'Telegram BOT API Token',
        propertyName: 'bottoken',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Chat ID',
        description: 'Integer Telegram Chat Identifier',
        placeholder: '',
        propertyName: 'chatid',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
      },
    ],
  },
];