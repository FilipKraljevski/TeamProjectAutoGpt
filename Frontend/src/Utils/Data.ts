export const data = [
    {
      "id": "d2e2ecd2-9ae6-422d-8dfe-ceca500ce6a6",
      "name": "AutoGPTAgentBlock",
      "inputSchema": {
        "properties": {
          "task": {
            "description": "Task description for the agent.",
            "placeholder": "Calculate and use Output command",
            "title": "Task",
            "type": "string"
          },
          "input": {
            "description": "Input data for the task",
            "placeholder": "8 + 5",
            "title": "Input",
            "type": "string"
          },
          "openai_api_key": {
            "default": "<secret>",
            "description": "OpenAI API key",
            "secret": true,
            "title": "Openai Api Key",
            "type": "string"
          },
          "enabled_components": {
            "description": "List of [AgentComponents](https://docs.agpt.co/forge/components/built-in-components/) enabled for the agent.",
            "items": {
              "type": "string"
            },
            "title": "Enabled Components",
            "type": "array"
          },
          "disabled_commands": {
            "description": "List of commands from enabled components to disable.",
            "items": {
              "type": "string"
            },
            "title": "Disabled Commands",
            "type": "array"
          },
          "fast_mode": {
            "default": false,
            "description": "If true uses fast llm, otherwise uses smart and slow llm.",
            "title": "Fast Mode",
            "type": "boolean"
          }
        },
        "required": [
          "task",
          "input"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "result": {
            "title": "Result",
            "type": "string"
          }
        },
        "required": [
          "result"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "AutoGPT agent, it utilizes a Large Language Model and enabled components/tools to perform a task.",
      "categories": [
        {
          "category": "AI",
          "description": "Block that leverages AI to perform a task."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "1ff065e9-88e8-4358-9d82-8dc91f622ba9",
      "name": "ValueBlock",
      "inputSchema": {
        "properties": {
          "input": {
            "description": "Trigger the block to produce the output. The value is only used when `data` is None.",
            "title": "Input"
          },
          "data": {
            "default": null,
            "description": "The constant data to be retained in the block. This value is passed as `output`.",
            "title": "Data"
          }
        },
        "required": [
          "input"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "output": {
            "title": "Output"
          }
        },
        "required": [
          "output"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block forwards the `input` pin to `output` pin. This block output will be static, the output can be consumed many times.",
      "categories": [
        {
          "category": "BASIC",
          "description": "Block that performs basic operations."
        }
      ],
      "contributors": [],
      "staticOutput": true
    },
    {
      "id": "f3b1c1b2-4c4f-4f0d-8d2f-4c4f0d8d2f4c",
      "name": "PrintingBlock",
      "inputSchema": {
        "properties": {
          "text": {
            "title": "Text",
            "type": "string"
          }
        },
        "required": [
          "text"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "status": {
            "title": "Status",
            "type": "string"
          }
        },
        "required": [
          "status"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "Print the given text to the console, this is used for a debugging purpose.",
      "categories": [
        {
          "category": "BASIC",
          "description": "Block that performs basic operations."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "31d1064e-7446-4693-a7d4-65e5ca1180d1",
      "name": "DictionaryAddEntryBlock",
      "inputSchema": {
        "properties": {
          "dictionary": {
            "anyOf": [
              {
                "type": "object"
              },
              {
                "type": "null"
              }
            ],
            "default": null,
            "description": "The dictionary to add the entry to. If not provided, a new dictionary will be created.",
            "placeholder": "{\"key1\": \"value1\", \"key2\": \"value2\"}",
            "title": "Dictionary"
          },
          "key": {
            "description": "The key for the new entry.",
            "placeholder": "new_key",
            "title": "Key",
            "type": "string"
          },
          "value": {
            "description": "The value for the new entry.",
            "placeholder": "new_value",
            "title": "Value"
          }
        },
        "required": [
          "key",
          "value"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "updated_dictionary": {
            "description": "The dictionary with the new entry added.",
            "title": "Updated Dictionary",
            "type": "object"
          },
          "error": {
            "description": "Error message if the operation failed.",
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "updated_dictionary",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "Adds a new key-value pair to a dictionary. If no dictionary is provided, a new one is created.",
      "categories": [
        {
          "category": "BASIC",
          "description": "Block that performs basic operations."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "aeb08fc1-2fc1-4141-bc8e-f758f183a822",
      "name": "ListAddEntryBlock",
      "inputSchema": {
        "properties": {
          "list": {
            "anyOf": [
              {
                "items": {},
                "type": "array"
              },
              {
                "type": "null"
              }
            ],
            "default": null,
            "description": "The list to add the entry to. If not provided, a new list will be created.",
            "placeholder": "[1, \"string\", {\"key\": \"value\"}]",
            "title": "List"
          },
          "entry": {
            "description": "The entry to add to the list. Can be of any type (string, int, dict, etc.).",
            "placeholder": "{\"new_key\": \"new_value\"}",
            "title": "Entry"
          },
          "position": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "null"
              }
            ],
            "default": null,
            "description": "The position to insert the new entry. If not provided, the entry will be appended to the end of the list.",
            "placeholder": "0",
            "title": "Position"
          }
        },
        "required": [
          "entry"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "updated_list": {
            "description": "The list with the new entry added.",
            "items": {},
            "title": "Updated List",
            "type": "array"
          },
          "error": {
            "description": "Error message if the operation failed.",
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "updated_list",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "Adds a new entry to a list. The entry can be of any type. If no list is provided, a new one is created.",
      "categories": [
        {
          "category": "BASIC",
          "description": "Block that performs basic operations."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "715696a0-e1da-45c8-b209-c2fa9c3b0be6",
      "name": "ConditionBlock",
      "inputSchema": {
        "properties": {
          "value1": {
            "description": "Enter the first value for comparison",
            "placeholder": "For example: 10 or 'hello' or True",
            "title": "Value1"
          },
          "operator": {
            "description": "Choose the comparison operator",
            "placeholder": "Select an operator",
            "enum": [
              "==",
              "!=",
              ">",
              "<",
              ">=",
              "<="
            ],
            "title": "ComparisonOperator",
            "type": "string"
          },
          "value2": {
            "description": "Enter the second value for comparison",
            "placeholder": "For example: 20 or 'world' or False",
            "title": "Value2"
          },
          "yes_value": {
            "default": null,
            "description": "(Optional) Value to output if the condition is true. If not provided, value1 will be used.",
            "placeholder": "Leave empty to use value1, or enter a specific value",
            "title": "Yes Value"
          },
          "no_value": {
            "default": null,
            "description": "(Optional) Value to output if the condition is false. If not provided, value1 will be used.",
            "placeholder": "Leave empty to use value1, or enter a specific value",
            "title": "No Value"
          }
        },
        "required": [
          "value1",
          "operator",
          "value2"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "result": {
            "description": "The result of the condition evaluation (True or False)",
            "title": "Result",
            "type": "boolean"
          },
          "yes_output": {
            "description": "The output value if the condition is true",
            "title": "Yes Output"
          },
          "no_output": {
            "description": "The output value if the condition is false",
            "title": "No Output"
          }
        },
        "required": [
          "result",
          "yes_output",
          "no_output"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "Handles conditional logic based on comparison operators",
      "categories": [
        {
          "category": "LOGIC",
          "description": "Programming logic to control the flow of your agent"
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "acf7625e-d2cb-4941-bfeb-2819fc6fc015",
      "name": "ReadCsvBlock",
      "inputSchema": {
        "properties": {
          "contents": {
            "title": "Contents",
            "type": "string"
          },
          "delimiter": {
            "default": ",",
            "title": "Delimiter",
            "type": "string"
          },
          "quotechar": {
            "default": "\"",
            "title": "Quotechar",
            "type": "string"
          },
          "escapechar": {
            "default": "\\",
            "title": "Escapechar",
            "type": "string"
          },
          "has_header": {
            "default": true,
            "title": "Has Header",
            "type": "boolean"
          },
          "skip_rows": {
            "default": 0,
            "title": "Skip Rows",
            "type": "integer"
          },
          "strip": {
            "default": true,
            "title": "Strip",
            "type": "boolean"
          },
          "skip_columns": {
            "default": [],
            "items": {
              "type": "string"
            },
            "title": "Skip Columns",
            "type": "array"
          }
        },
        "required": [
          "contents"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "data": {
            "additionalProperties": {
              "type": "string"
            },
            "title": "Data",
            "type": "object"
          }
        },
        "required": [
          "data"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        }
      ],
      "contributors": [
        {
          "name": "Nicholas Tindle"
        }
      ],
      "staticOutput": false
    },
    {
      "id": "d3f4g5h6-1i2j-3k4l-5m6n-7o8p9q0r1s2t",
      "name": "DiscordReaderBlock",
      "inputSchema": {
        "properties": {
          "discord_bot_token": {
            "default": "<secret>",
            "description": "Discord bot token",
            "secret": true,
            "title": "Discord Bot Token",
            "type": "string"
          },
          "continuous_read": {
            "default": true,
            "description": "Whether to continuously read messages",
            "title": "Continuous Read",
            "type": "boolean"
          }
        },
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "message_content": {
            "description": "The content of the message received",
            "title": "Message Content",
            "type": "string"
          },
          "channel_name": {
            "description": "The name of the channel the message was received from",
            "title": "Channel Name",
            "type": "string"
          },
          "username": {
            "description": "The username of the user who sent the message",
            "title": "Username",
            "type": "string"
          }
        },
        "required": [
          "message_content",
          "channel_name",
          "username"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [
        {
          "category": "SOCIAL",
          "description": "Block that interacts with social media platforms."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "h1i2j3k4-5l6m-7n8o-9p0q-r1s2t3u4v5w6",
      "name": "DiscordMessageSenderBlock",
      "inputSchema": {
        "properties": {
          "discord_bot_token": {
            "default": "<secret>",
            "description": "Discord bot token",
            "secret": true,
            "title": "Discord Bot Token",
            "type": "string"
          },
          "message_content": {
            "description": "The content of the message received",
            "title": "Message Content",
            "type": "string"
          },
          "channel_name": {
            "description": "The name of the channel the message was received from",
            "title": "Channel Name",
            "type": "string"
          }
        },
        "required": [
          "message_content",
          "channel_name"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "status": {
            "description": "The status of the operation (e.g., 'Message sent', 'Error')",
            "title": "Status",
            "type": "string"
          }
        },
        "required": [
          "status"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [
        {
          "category": "SOCIAL",
          "description": "Block that interacts with social media platforms."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "a1234567-89ab-cdef-0123-456789abcdef",
      "name": "SendEmailBlock",
      "inputSchema": {
        "properties": {
          "to_email": {
            "description": "Recipient email address",
            "placeholder": "recipient@example.com",
            "title": "To Email",
            "type": "string"
          },
          "subject": {
            "description": "Subject of the email",
            "placeholder": "Enter the email subject",
            "title": "Subject",
            "type": "string"
          },
          "body": {
            "description": "Body of the email",
            "placeholder": "Enter the email body",
            "title": "Body",
            "type": "string"
          },
          "creds": {
            "default": {
              "smtp_server": "smtp.gmail.com",
              "smtp_port": 25,
              "smtp_username": "<secret>",
              "smtp_password": "<secret>"
            },
            "description": "SMTP credentials",
            "properties": {
              "smtp_server": {
                "default": "smtp.gmail.com",
                "description": "SMTP server address",
                "title": "Smtp Server",
                "type": "string"
              },
              "smtp_port": {
                "default": 25,
                "description": "SMTP port number",
                "title": "Smtp Port",
                "type": "integer"
              },
              "smtp_username": {
                "default": "<secret>",
                "secret": true,
                "title": "Smtp Username",
                "type": "string"
              },
              "smtp_password": {
                "default": "<secret>",
                "secret": true,
                "title": "Smtp Password",
                "type": "string"
              }
            },
            "title": "Email Credentials",
            "type": "object"
          }
        },
        "required": [
          "to_email",
          "subject",
          "body"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "status": {
            "description": "Status of the email sending operation",
            "title": "Status",
            "type": "string"
          },
          "error": {
            "description": "Error message if the email sending failed",
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "status",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block sends an email using the provided SMTP credentials.",
      "categories": [
        {
          "category": "OUTPUT",
          "description": "Block that interacts with output of the graph."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "6595ae1f-b924-42cb-9a41-551a0611c4b4",
      "name": "HttpRequestBlock",
      "inputSchema": {
        "properties": {
          "url": {
            "title": "Url",
            "type": "string"
          },
          "method": {
            "default": "POST",
            "enum": [
              "GET",
              "POST",
              "PUT",
              "DELETE",
              "PATCH",
              "OPTIONS",
              "HEAD"
            ],
            "title": "HttpMethod",
            "type": "string"
          },
          "headers": {
            "additionalProperties": {
              "type": "string"
            },
            "default": {},
            "title": "Headers",
            "type": "object"
          },
          "body": {
            "default": {},
            "title": "Body"
          }
        },
        "required": [
          "url"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "response": {
            "title": "Response"
          },
          "client_error": {
            "title": "Client Error"
          },
          "server_error": {
            "title": "Server Error"
          }
        },
        "required": [
          "response",
          "client_error",
          "server_error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block makes an HTTP request to the given URL.",
      "categories": [
        {
          "category": "INPUT",
          "description": "Block that interacts with input of the graph."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "f8e7d6c5-b4a3-2c1d-0e9f-8g7h6i5j4k3l",
      "name": "ForEachBlock",
      "inputSchema": {
        "properties": {
          "items": {
            "description": "The list of items to iterate over",
            "items": {},
            "placeholder": "[1, 2, 3, 4, 5]",
            "title": "Items",
            "type": "array"
          }
        },
        "required": [
          "items"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "item": {
            "description": "A tuple with the index and current item in the iteration",
            "maxItems": 2,
            "minItems": 2,
            "prefixItems": [
              {
                "type": "integer"
              },
              {}
            ],
            "title": "Item",
            "type": "array"
          }
        },
        "required": [
          "item"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [
        {
          "category": "LOGIC",
          "description": "Programming logic to control the flow of your agent"
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "ed55ac19-356e-4243-a6cb-bc599e9b716f",
      "name": "ObjectLlmCallBlock",
      "inputSchema": {
        "properties": {
          "prompt": {
            "title": "Prompt",
            "type": "string"
          },
          "expected_format": {
            "additionalProperties": {
              "type": "string"
            },
            "title": "Expected Format",
            "type": "object"
          },
          "model": {
            "default": "gpt-4-turbo",
            "enum": [
              "gpt-4o-mini",
              "gpt-4o",
              "gpt-4-turbo",
              "gpt-3.5-turbo",
              "claude-3-5-sonnet-20240620",
              "claude-3-haiku-20240307",
              "llama3-8b-8192",
              "llama3-70b-8192",
              "mixtral-8x7b-32768",
              "gemma-7b-it",
              "gemma2-9b-it",
              "llama-3.1-405b-reasoning",
              "llama-3.1-70b-versatile",
              "llama-3.1-8b-instant",
              "llama3",
              "llama3.1:405b"
            ],
            "title": "LlmModel",
            "type": "string"
          },
          "api_key": {
            "default": "<secret>",
            "secret": true,
            "title": "Api Key",
            "type": "string"
          },
          "sys_prompt": {
            "default": "",
            "title": "Sys Prompt",
            "type": "string"
          },
          "retry": {
            "default": 3,
            "title": "Retry",
            "type": "integer"
          }
        },
        "required": [
          "prompt",
          "expected_format"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "response": {
            "additionalProperties": {
              "type": "string"
            },
            "title": "Response",
            "type": "object"
          },
          "error": {
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "response",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "Call a Large Language Model (LLM) to generate formatted object based on the given prompt.",
      "categories": [
        {
          "category": "AI",
          "description": "Block that leverages AI to perform a task."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "1f292d4a-41a4-4977-9684-7c8d560b9f91",
      "name": "TextLlmCallBlock",
      "inputSchema": {
        "properties": {
          "prompt": {
            "title": "Prompt",
            "type": "string"
          },
          "model": {
            "default": "gpt-4-turbo",
            "enum": [
              "gpt-4o-mini",
              "gpt-4o",
              "gpt-4-turbo",
              "gpt-3.5-turbo",
              "claude-3-5-sonnet-20240620",
              "claude-3-haiku-20240307",
              "llama3-8b-8192",
              "llama3-70b-8192",
              "mixtral-8x7b-32768",
              "gemma-7b-it",
              "gemma2-9b-it",
              "llama-3.1-405b-reasoning",
              "llama-3.1-70b-versatile",
              "llama-3.1-8b-instant",
              "llama3",
              "llama3.1:405b"
            ],
            "title": "LlmModel",
            "type": "string"
          },
          "api_key": {
            "default": "<secret>",
            "secret": true,
            "title": "Api Key",
            "type": "string"
          },
          "sys_prompt": {
            "default": "",
            "title": "Sys Prompt",
            "type": "string"
          },
          "retry": {
            "default": 3,
            "title": "Retry",
            "type": "integer"
          }
        },
        "required": [
          "prompt"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "response": {
            "title": "Response",
            "type": "string"
          },
          "error": {
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "response",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "Call a Large Language Model (LLM) to generate a string based on the given prompt.",
      "categories": [
        {
          "category": "AI",
          "description": "Block that leverages AI to perform a task."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "c3d4e5f6-7g8h-9i0j-1k2l-m3n4o5p6q7r8",
      "name": "TextSummarizerBlock",
      "inputSchema": {
        "properties": {
          "text": {
            "title": "Text",
            "type": "string"
          },
          "model": {
            "default": "gpt-4-turbo",
            "enum": [
              "gpt-4o-mini",
              "gpt-4o",
              "gpt-4-turbo",
              "gpt-3.5-turbo",
              "claude-3-5-sonnet-20240620",
              "claude-3-haiku-20240307",
              "llama3-8b-8192",
              "llama3-70b-8192",
              "mixtral-8x7b-32768",
              "gemma-7b-it",
              "gemma2-9b-it",
              "llama-3.1-405b-reasoning",
              "llama-3.1-70b-versatile",
              "llama-3.1-8b-instant",
              "llama3",
              "llama3.1:405b"
            ],
            "title": "LlmModel",
            "type": "string"
          },
          "api_key": {
            "default": "<secret>",
            "secret": true,
            "title": "Api Key",
            "type": "string"
          },
          "max_tokens": {
            "default": 4000,
            "title": "Max Tokens",
            "type": "integer"
          },
          "chunk_overlap": {
            "default": 100,
            "title": "Chunk Overlap",
            "type": "integer"
          }
        },
        "required": [
          "text"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "summary": {
            "title": "Summary",
            "type": "string"
          },
          "error": {
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "summary",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "Utilize a Large Language Model (LLM) to summarize a long text.",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        },
        {
          "category": "AI",
          "description": "Block that leverages AI to perform a task."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
      "name": "AdvancedLlmCallBlock",
      "inputSchema": {
        "properties": {
          "messages": {
            "description": "List of messages in the conversation.",
            "items": {
              "properties": {
                "role": {
                  "enum": [
                    "system",
                    "user",
                    "assistant"
                  ],
                  "title": "MessageRole",
                  "type": "string"
                },
                "content": {
                  "title": "Content",
                  "type": "string"
                }
              },
              "required": [
                "role",
                "content"
              ],
              "title": "Message",
              "type": "object"
            },
            "minItems": 1,
            "title": "Messages",
            "type": "array"
          },
          "model": {
            "default": "gpt-4-turbo",
            "description": "The language model to use for the conversation.",
            "enum": [
              "gpt-4o-mini",
              "gpt-4o",
              "gpt-4-turbo",
              "gpt-3.5-turbo",
              "claude-3-5-sonnet-20240620",
              "claude-3-haiku-20240307",
              "llama3-8b-8192",
              "llama3-70b-8192",
              "mixtral-8x7b-32768",
              "gemma-7b-it",
              "gemma2-9b-it",
              "llama-3.1-405b-reasoning",
              "llama-3.1-70b-versatile",
              "llama-3.1-8b-instant",
              "llama3",
              "llama3.1:405b"
            ],
            "title": "LlmModel",
            "type": "string"
          },
          "api_key": {
            "default": "<secret>",
            "description": "API key for the chosen language model provider.",
            "secret": true,
            "title": "Api Key",
            "type": "string"
          },
          "max_tokens": {
            "anyOf": [
              {
                "minimum": 1,
                "type": "integer"
              },
              {
                "type": "null"
              }
            ],
            "default": null,
            "description": "The maximum number of tokens to generate in the chat completion.",
            "title": "Max Tokens"
          }
        },
        "required": [
          "messages"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "response": {
            "description": "The model's response to the conversation.",
            "title": "Response",
            "type": "string"
          },
          "error": {
            "description": "Error message if the API call failed.",
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "response",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "Advanced LLM call that takes a list of messages and sends them to the language model.",
      "categories": [
        {
          "category": "AI",
          "description": "Block that leverages AI to perform a task."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "b1ab9b19-67a6-406d-abf5-2dba76d00c79",
      "name": "MathsBlock",
      "inputSchema": {
        "properties": {
          "operation": {
            "description": "Choose the math operation you want to perform",
            "placeholder": "Select an operation",
            "enum": [
              "Add",
              "Subtract",
              "Multiply",
              "Divide",
              "Power"
            ],
            "title": "Operation",
            "type": "string"
          },
          "a": {
            "description": "Enter the first number (A)",
            "placeholder": "For example: 10",
            "title": "A",
            "type": "number"
          },
          "b": {
            "description": "Enter the second number (B)",
            "placeholder": "For example: 5",
            "title": "B",
            "type": "number"
          },
          "round_result": {
            "default": false,
            "description": "Do you want to round the result to a whole number?",
            "title": "Round Result",
            "type": "boolean"
          }
        },
        "required": [
          "operation",
          "a",
          "b"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "result": {
            "description": "The result of your calculation",
            "title": "Result",
            "type": "number"
          }
        },
        "required": [
          "result"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [
        {
          "category": "LOGIC",
          "description": "Programming logic to control the flow of your agent"
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "3c9c2f42-b0c3-435f-ba35-05f7a25c772a",
      "name": "CounterBlock",
      "inputSchema": {
        "properties": {
          "collection": {
            "description": "Enter the collection you want to count. This can be a list, dictionary, string, or any other iterable.",
            "placeholder": "For example: [1, 2, 3] or {'a': 1, 'b': 2} or 'hello'",
            "title": "Collection"
          }
        },
        "required": [
          "collection"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "count": {
            "description": "The number of items in the collection",
            "title": "Count",
            "type": "integer"
          }
        },
        "required": [
          "count"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [
        {
          "category": "LOGIC",
          "description": "Programming logic to control the flow of your agent"
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "3f7b2dcb-4a78-4e3f-b0f1-88132e1b89df",
      "name": "CreateMediumPostBlock",
      "inputSchema": {
        "properties": {
          "author_id": {
            "default": "<secret>",
            "description": "The Medium AuthorID of the user. You can get this by calling the /me endpoint of the Medium API.\n\ncurl -H \"Authorization: Bearer YOUR_ACCESS_TOKEN\" https://api.medium.com/v1/me\" the response will contain the authorId field.",
            "placeholder": "Enter the author's Medium AuthorID",
            "secret": true,
            "title": "Author Id",
            "type": "string"
          },
          "title": {
            "description": "The title of your Medium post",
            "placeholder": "Enter your post title",
            "title": "Title",
            "type": "string"
          },
          "content": {
            "description": "The main content of your Medium post",
            "placeholder": "Enter your post content",
            "title": "Content",
            "type": "string"
          },
          "content_format": {
            "description": "The format of the content: 'html' or 'markdown'",
            "placeholder": "html",
            "title": "Content Format",
            "type": "string"
          },
          "tags": {
            "description": "List of tags for your Medium post (up to 5)",
            "items": {
              "type": "string"
            },
            "placeholder": "['technology', 'AI', 'blogging']",
            "title": "Tags",
            "type": "array"
          },
          "canonical_url": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ],
            "default": null,
            "description": "The original home of this content, if it was originally published elsewhere",
            "placeholder": "https://yourblog.com/original-post",
            "title": "Canonical Url"
          },
          "publish_status": {
            "description": "The publish status: 'public', 'draft', or 'unlisted'",
            "placeholder": "public",
            "title": "Publish Status",
            "type": "string"
          },
          "license": {
            "default": "all-rights-reserved",
            "description": "The license of the post: 'all-rights-reserved', 'cc-40-by', 'cc-40-by-sa', 'cc-40-by-nd', 'cc-40-by-nc', 'cc-40-by-nc-nd', 'cc-40-by-nc-sa', 'cc-40-zero', 'public-domain'",
            "placeholder": "all-rights-reserved",
            "title": "License",
            "type": "string"
          },
          "notify_followers": {
            "default": false,
            "description": "Whether to notify followers that the user has published",
            "placeholder": "False",
            "title": "Notify Followers",
            "type": "boolean"
          },
          "api_key": {
            "default": "<secret>",
            "description": "The API key for the Medium integration. You can get this from https://medium.com/me/settings/security and scrolling down to \"integration Tokens\".",
            "placeholder": "Enter your Medium API key",
            "secret": true,
            "title": "Api Key",
            "type": "string"
          }
        },
        "required": [
          "title",
          "content",
          "content_format",
          "tags",
          "publish_status"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "post_id": {
            "description": "The ID of the created Medium post",
            "title": "Post Id",
            "type": "string"
          },
          "post_url": {
            "description": "The URL of the created Medium post",
            "title": "Post Url",
            "type": "string"
          },
          "author_id": {
            "description": "The Medium user ID of the author",
            "title": "Author Id",
            "type": "string"
          },
          "published_at": {
            "description": "The timestamp when the post was published",
            "title": "Published At",
            "type": "integer"
          },
          "error": {
            "description": "Error message if the post creation failed",
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "post_id",
          "post_url",
          "author_id",
          "published_at",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [
        {
          "category": "SOCIAL",
          "description": "Block that interacts with social media platforms."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "c6731acb-4285-4ee1-bc9b-03d0766c370f",
      "name": "RedditGetPostsBlock",
      "inputSchema": {
        "properties": {
          "subreddit": {
            "description": "Subreddit name",
            "title": "Subreddit",
            "type": "string"
          },
          "creds": {
            "default": {
              "client_id": "<secret>",
              "client_secret": "<secret>",
              "username": "<secret>",
              "password": "<secret>",
              "user_agent": "AutoGPT:1.0 (by /u/autogpt)"
            },
            "description": "Reddit credentials",
            "properties": {
              "client_id": {
                "default": "<secret>",
                "secret": true,
                "title": "Client Id",
                "type": "string"
              },
              "client_secret": {
                "default": "<secret>",
                "secret": true,
                "title": "Client Secret",
                "type": "string"
              },
              "username": {
                "default": "<secret>",
                "secret": true,
                "title": "Username",
                "type": "string"
              },
              "password": {
                "default": "<secret>",
                "secret": true,
                "title": "Password",
                "type": "string"
              },
              "user_agent": {
                "default": "AutoGPT:1.0 (by /u/autogpt)",
                "title": "User Agent",
                "type": "string"
              }
            },
            "title": "Reddit Credentials",
            "type": "object"
          },
          "last_minutes": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "null"
              }
            ],
            "default": null,
            "description": "Post time to stop minutes ago while fetching posts",
            "title": "Last Minutes"
          },
          "last_post": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ],
            "default": null,
            "description": "Post ID to stop when reached while fetching posts",
            "title": "Last Post"
          },
          "post_limit": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "null"
              }
            ],
            "default": 10,
            "description": "Number of posts to fetch",
            "title": "Post Limit"
          }
        },
        "required": [
          "subreddit"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "post": {
            "description": "Reddit post",
            "properties": {
              "id": {
                "title": "Id",
                "type": "string"
              },
              "subreddit": {
                "title": "Subreddit",
                "type": "string"
              },
              "title": {
                "title": "Title",
                "type": "string"
              },
              "body": {
                "title": "Body",
                "type": "string"
              }
            },
            "required": [
              "id",
              "subreddit",
              "title",
              "body"
            ],
            "title": "RedditPost",
            "type": "object"
          }
        },
        "required": [
          "post"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block fetches Reddit posts from a defined subreddit name.",
      "categories": [
        {
          "category": "SOCIAL",
          "description": "Block that interacts with social media platforms."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "4a92261b-701e-4ffb-8970-675fd28e261f",
      "name": "RedditPostCommentBlock",
      "inputSchema": {
        "properties": {
          "creds": {
            "default": {
              "client_id": "<secret>",
              "client_secret": "<secret>",
              "username": "<secret>",
              "password": "<secret>",
              "user_agent": "AutoGPT:1.0 (by /u/autogpt)"
            },
            "description": "Reddit credentials",
            "properties": {
              "client_id": {
                "default": "<secret>",
                "secret": true,
                "title": "Client Id",
                "type": "string"
              },
              "client_secret": {
                "default": "<secret>",
                "secret": true,
                "title": "Client Secret",
                "type": "string"
              },
              "username": {
                "default": "<secret>",
                "secret": true,
                "title": "Username",
                "type": "string"
              },
              "password": {
                "default": "<secret>",
                "secret": true,
                "title": "Password",
                "type": "string"
              },
              "user_agent": {
                "default": "AutoGPT:1.0 (by /u/autogpt)",
                "title": "User Agent",
                "type": "string"
              }
            },
            "title": "Reddit Credentials",
            "type": "object"
          },
          "data": {
            "description": "Reddit comment",
            "properties": {
              "post_id": {
                "title": "Post Id",
                "type": "string"
              },
              "comment": {
                "title": "Comment",
                "type": "string"
              }
            },
            "required": [
              "post_id",
              "comment"
            ],
            "title": "RedditComment",
            "type": "object"
          }
        },
        "required": [
          "data"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "comment_id": {
            "title": "Comment Id",
            "type": "string"
          }
        },
        "required": [
          "comment_id"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block posts a Reddit comment on a specified Reddit post.",
      "categories": [
        {
          "category": "SOCIAL",
          "description": "Block that interacts with social media platforms."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "c6731acb-4105-4zp1-bc9b-03d0036h370g",
      "name": "RSSReaderBlock",
      "inputSchema": {
        "properties": {
          "rss_url": {
            "description": "The URL of the RSS feed to read",
            "placeholder": "https://example.com/rss",
            "title": "Rss Url",
            "type": "string"
          },
          "time_period": {
            "default": 1440,
            "description": "The time period to check in minutes relative to the run block runtime, e.g. 60 would check for new entries in the last hour.",
            "placeholder": "1440",
            "title": "Time Period",
            "type": "integer"
          },
          "polling_rate": {
            "description": "The number of seconds to wait between polling attempts.",
            "placeholder": "300",
            "title": "Polling Rate",
            "type": "integer"
          },
          "run_continuously": {
            "default": true,
            "description": "Whether to run the block continuously or just once.",
            "title": "Run Continuously",
            "type": "boolean"
          }
        },
        "required": [
          "rss_url",
          "polling_rate"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "entry": {
            "description": "The RSS item",
            "properties": {
              "title": {
                "title": "Title",
                "type": "string"
              },
              "link": {
                "title": "Link",
                "type": "string"
              },
              "description": {
                "title": "Description",
                "type": "string"
              },
              "pub_date": {
                "format": "date-time",
                "title": "Pub Date",
                "type": "string"
              },
              "author": {
                "title": "Author",
                "type": "string"
              },
              "categories": {
                "items": {
                  "type": "string"
                },
                "title": "Categories",
                "type": "array"
              }
            },
            "required": [
              "title",
              "link",
              "description",
              "pub_date",
              "author",
              "categories"
            ],
            "title": "RSSEntry",
            "type": "object"
          }
        },
        "required": [
          "entry"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [
        {
          "category": "OUTPUT",
          "description": "Block that interacts with output of the graph."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "h5e7f8g9-1b2c-3d4e-5f6g-7h8i9j0k1l2m",
      "name": "WikipediaSummaryBlock",
      "inputSchema": {
        "properties": {
          "topic": {
            "title": "Topic",
            "type": "string"
          }
        },
        "required": [
          "topic"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "summary": {
            "title": "Summary",
            "type": "string"
          },
          "error": {
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "summary",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block fetches the summary of a given topic from Wikipedia.",
      "categories": [
        {
          "category": "SEARCH",
          "description": "Block that searches or extracts information from the internet."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "b2c3d4e5-6f7g-8h9i-0j1k-l2m3n4o5p6q7",
      "name": "WebSearchBlock",
      "inputSchema": {
        "properties": {
          "query": {
            "title": "Query",
            "type": "string"
          }
        },
        "required": [
          "query"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "results": {
            "title": "Results",
            "type": "string"
          },
          "error": {
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "results",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block searches the internet for the given search query.",
      "categories": [
        {
          "category": "SEARCH",
          "description": "Block that searches or extracts information from the internet."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "a1b2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
      "name": "WebScraperBlock",
      "inputSchema": {
        "properties": {
          "url": {
            "title": "Url",
            "type": "string"
          }
        },
        "required": [
          "url"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "content": {
            "title": "Content",
            "type": "string"
          },
          "error": {
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "content",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block scrapes the content from the given web URL.",
      "categories": [
        {
          "category": "SEARCH",
          "description": "Block that searches or extracts information from the internet."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "f7a8b2c3-6d4e-5f8b-9e7f-6d4e5f8b9e7f",
      "name": "GetOpenWeatherMapBlock",
      "inputSchema": {
        "properties": {
          "location": {
            "title": "Location",
            "type": "string"
          },
          "api_key": {
            "default": "<secret>",
            "secret": true,
            "title": "Api Key",
            "type": "string"
          },
          "use_celsius": {
            "title": "Use Celsius",
            "type": "boolean"
          }
        },
        "required": [
          "location",
          "use_celsius"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "temperature": {
            "title": "Temperature",
            "type": "string"
          },
          "humidity": {
            "title": "Humidity",
            "type": "string"
          },
          "condition": {
            "title": "Condition",
            "type": "string"
          },
          "error": {
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "temperature",
          "humidity",
          "condition",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "3060088f-6ed9-4928-9ba7-9c92823a7ccd",
      "name": "TextMatcherBlock",
      "inputSchema": {
        "properties": {
          "text": {
            "description": "Text to match",
            "title": "Text"
          },
          "match": {
            "description": "Pattern (Regex) to match",
            "title": "Match",
            "type": "string"
          },
          "data": {
            "description": "Data to be forwarded to output",
            "title": "Data"
          },
          "case_sensitive": {
            "default": true,
            "description": "Case sensitive match",
            "title": "Case Sensitive",
            "type": "boolean"
          },
          "dot_all": {
            "default": true,
            "description": "Dot matches all",
            "title": "Dot All",
            "type": "boolean"
          }
        },
        "required": [
          "text",
          "match",
          "data"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "positive": {
            "description": "Output data if match is found",
            "title": "Positive"
          },
          "negative": {
            "description": "Output data if match is not found",
            "title": "Negative"
          }
        },
        "required": [
          "positive",
          "negative"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block matches the given text with the pattern (regex) and forwards the provided data to positive (if matching) or negative (if not matching) output.",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "3146e4fe-2cdd-4f29-bd12-0c9d5bb4deb0",
      "name": "TextParserBlock",
      "inputSchema": {
        "properties": {
          "text": {
            "description": "Text to parse",
            "title": "Text"
          },
          "pattern": {
            "description": "Pattern (Regex) to parse",
            "title": "Pattern",
            "type": "string"
          },
          "group": {
            "default": 0,
            "description": "Group number to extract",
            "title": "Group",
            "type": "integer"
          },
          "case_sensitive": {
            "default": true,
            "description": "Case sensitive match",
            "title": "Case Sensitive",
            "type": "boolean"
          },
          "dot_all": {
            "default": true,
            "description": "Dot matches all",
            "title": "Dot All",
            "type": "boolean"
          }
        },
        "required": [
          "text",
          "pattern"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "positive": {
            "description": "Extracted text",
            "title": "Positive",
            "type": "string"
          },
          "negative": {
            "description": "Original text",
            "title": "Negative",
            "type": "string"
          }
        },
        "required": [
          "positive",
          "negative"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block extracts the text from the given text using the pattern (regex).",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "db7d8f02-2f44-4c55-ab7a-eae0941f0c30",
      "name": "TextFormatterBlock",
      "inputSchema": {
        "properties": {
          "texts": {
            "default": [],
            "description": "Texts (list) to format",
            "items": {},
            "title": "Texts",
            "type": "array"
          },
          "named_texts": {
            "default": {},
            "description": "Texts (dict) to format",
            "title": "Named Texts",
            "type": "object"
          },
          "format": {
            "description": "Template to format the text using `texts` and `named_texts`",
            "title": "Format",
            "type": "string"
          }
        },
        "required": [
          "format"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "output": {
            "title": "Output",
            "type": "string"
          }
        },
        "required": [
          "output"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block formats the given texts using the format template.",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "e30a4d42-7b7d-4e6a-b36e-1f9b8e3b7d85",
      "name": "TextCombinerBlock",
      "inputSchema": {
        "properties": {
          "input1": {
            "default": "",
            "description": "First text input",
            "title": "Input1",
            "type": "string"
          },
          "input2": {
            "default": "",
            "description": "Second text input",
            "title": "Input2",
            "type": "string"
          },
          "input3": {
            "default": "",
            "description": "Second text input",
            "title": "Input3",
            "type": "string"
          },
          "input4": {
            "default": "",
            "description": "Second text input",
            "title": "Input4",
            "type": "string"
          },
          "delimiter": {
            "default": "",
            "description": "Delimiter to combine texts",
            "title": "Delimiter",
            "type": "string"
          }
        },
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "output": {
            "description": "Combined text",
            "title": "Output",
            "type": "string"
          }
        },
        "required": [
          "output"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block combines multiple input texts into a single output text.",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "a892b8d9-3e4e-4e9c-9c1e-75f8efcf1bfa",
      "name": "CurrentTimeBlock",
      "inputSchema": {
        "properties": {
          "trigger": {
            "title": "Trigger",
            "type": "string"
          }
        },
        "required": [
          "trigger"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "time": {
            "title": "Time",
            "type": "string"
          }
        },
        "required": [
          "time"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block outputs the current time.",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "b29c1b50-5d0e-4d9f-8f9d-1b0e6fcbf0b1",
      "name": "CurrentDateBlock",
      "inputSchema": {
        "properties": {
          "trigger": {
            "title": "Trigger",
            "type": "string"
          },
          "offset": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "string"
              }
            ],
            "title": "Offset"
          }
        },
        "required": [
          "trigger",
          "offset"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "date": {
            "title": "Date",
            "type": "string"
          }
        },
        "required": [
          "date"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block outputs the current date with an optional offset.",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "b29c1b50-5d0e-4d9f-8f9d-1b0e6fcbf0h2",
      "name": "CurrentDateAndTimeBlock",
      "inputSchema": {
        "properties": {
          "trigger": {
            "title": "Trigger",
            "type": "string"
          }
        },
        "required": [
          "trigger"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "date_time": {
            "title": "Date Time",
            "type": "string"
          }
        },
        "required": [
          "date_time"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block outputs the current date and time.",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "d67a9c52-5e4e-11e2-bcfd-0800200c9a71",
      "name": "TimerBlock",
      "inputSchema": {
        "properties": {
          "seconds": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "string"
              }
            ],
            "default": 0,
            "title": "Seconds"
          },
          "minutes": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "string"
              }
            ],
            "default": 0,
            "title": "Minutes"
          },
          "hours": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "string"
              }
            ],
            "default": 0,
            "title": "Hours"
          },
          "days": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "string"
              }
            ],
            "default": 0,
            "title": "Days"
          }
        },
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "message": {
            "title": "Message",
            "type": "string"
          }
        },
        "required": [
          "message"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "This block triggers after a specified duration.",
      "categories": [
        {
          "category": "TEXT",
          "description": "Block that processes text data."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "f3a8f7e1-4b1d-4e5f-9f2a-7c3d5a2e6b4c",
      "name": "YouTubeTranscriberBlock",
      "inputSchema": {
        "properties": {
          "youtube_url": {
            "description": "The URL of the YouTube video to transcribe",
            "placeholder": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "title": "Youtube Url",
            "type": "string"
          }
        },
        "required": [
          "youtube_url"
        ],
        "title": "Input",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "video_id": {
            "description": "The extracted YouTube video ID",
            "title": "Video Id",
            "type": "string"
          },
          "transcript": {
            "description": "The transcribed text of the video",
            "title": "Transcript",
            "type": "string"
          },
          "error": {
            "description": "Any error message if the transcription fails",
            "title": "Error",
            "type": "string"
          }
        },
        "required": [
          "video_id",
          "transcript",
          "error"
        ],
        "title": "Output",
        "type": "object"
      },
      "description": "",
      "categories": [
        {
          "category": "SOCIAL",
          "description": "Block that interacts with social media platforms."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "b2g2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
      "name": "ObjectLookupBlock",
      "inputSchema": {
        "properties": {
          "input": {
            "description": "Dictionary to lookup from",
            "title": "Input"
          },
          "key": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "integer"
              }
            ],
            "description": "Key to lookup in the dictionary",
            "title": "Key"
          }
        },
        "required": [
          "input",
          "key"
        ],
        "title": "ObjectLookupBaseInput",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "output": {
            "description": "Value found for the given key",
            "title": "Output"
          },
          "missing": {
            "description": "Value of the input that missing the key",
            "title": "Missing"
          }
        },
        "required": [
          "output",
          "missing"
        ],
        "title": "ObjectLookupBaseOutput",
        "type": "object"
      },
      "description": "Lookup the given key in the input dictionary/object/list and return the value.",
      "categories": [
        {
          "category": "BASIC",
          "description": "Block that performs basic operations."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "c0a8e994-ebf1-4a9c-a4d8-89d09c86741b",
      "name": "InputBlock",
      "inputSchema": {
        "properties": {
          "input": {
            "description": "Dictionary to lookup from",
            "title": "Input"
          },
          "key": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "integer"
              }
            ],
            "description": "Key to lookup in the dictionary",
            "title": "Key"
          }
        },
        "required": [
          "input",
          "key"
        ],
        "title": "ObjectLookupBaseInput",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "output": {
            "description": "Value found for the given key",
            "title": "Output"
          },
          "missing": {
            "description": "Value of the input that missing the key",
            "title": "Missing"
          }
        },
        "required": [
          "output",
          "missing"
        ],
        "title": "ObjectLookupBaseOutput",
        "type": "object"
      },
      "description": "Lookup the given key in the input dictionary/object/list and return the value.",
      "categories": [
        {
          "category": "INPUT",
          "description": "Block that interacts with input of the graph."
        },
        {
          "category": "BASIC",
          "description": "Block that performs basic operations."
        }
      ],
      "contributors": [],
      "staticOutput": false
    },
    {
      "id": "363ae599-353e-4804-937e-b2ee3cef3da4",
      "name": "OutputBlock",
      "inputSchema": {
        "properties": {
          "input": {
            "description": "Dictionary to lookup from",
            "title": "Input"
          },
          "key": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "integer"
              }
            ],
            "description": "Key to lookup in the dictionary",
            "title": "Key"
          }
        },
        "required": [
          "input",
          "key"
        ],
        "title": "ObjectLookupBaseInput",
        "type": "object"
      },
      "outputSchema": {
        "properties": {
          "output": {
            "description": "Value found for the given key",
            "title": "Output"
          },
          "missing": {
            "description": "Value of the input that missing the key",
            "title": "Missing"
          }
        },
        "required": [
          "output",
          "missing"
        ],
        "title": "ObjectLookupBaseOutput",
        "type": "object"
      },
      "description": "Lookup the given key in the input dictionary/object/list and return the value.",
      "categories": [
        {
          "category": "OUTPUT",
          "description": "Block that interacts with output of the graph."
        },
        {
          "category": "BASIC",
          "description": "Block that performs basic operations."
        }
      ],
      "contributors": [],
      "staticOutput": false
    }
]

export const getInputFields = (id: string) => {
    const inputFields = data.find(d => d.id === id)
    return inputFields?.inputSchema.properties
}

/*export const createFormData = (inputFields: Object) => {
    const result = {}
    inputFields.
}*/