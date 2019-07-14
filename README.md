# wanikani-api-js

[![NPM](https://nodei.co/npm/wanikani-api-js.png)](https://www.npmjs.com/package/wanikani-api-js)

## Overview

wanikani-api-js is a simple JavaScript WaniKani API wrapper.

## Getting Started

### Prerequisites

- Node

### Installation

To install wanikani-api-js simply run:

```
npm install wanikani-api-js
```

in your project folder.

## Running the Tests

To run the test a few changes need to be done.

1. Open the `config.json` in the `tests` folder
2. The [WaniKani AuthToken](https://www.wanikani.com/settings/account#public-api-key) can also be set in `config.json` or later as a parameter in the test command.

The tests can then be run via:

```
  npm test
```

or

```
  npm test -- --authToken=<Your WaniKani Auth Token>
```

in case the auth token was not already set in the `config.json`;



## Usage

### JavaScript

```javascript
const WaniKaniApi = require('wanikani-js-api').WaniKaniApi;
const wanikani = new WaniKaniApi(apiToken);

wanikani.authToken = '<api_token_here>';

async function printUserData() {
  const user = await wanikani.getUser();
  const userData = await user.asUserData();

  console.log(userData);
}

printUserData();
```

### TypeScript

```typescript
import {WaniKaniApi} from 'wanikani-js-api';

class WaniKaniApiSample {
  public wanikani: WaniKaniApi = new WaniKaniApi();

  wanikani.authToken = '<api_token_here>';

  public async printUserData() {
    const user: JSON = await this.wanikani.getUser()
    const userData: JSON = await user.asUserData()

   console.log(userData);
  }
}

const waniKaniApi: WaniKaniApi = new WaniKaniApiSample();

waniKaniApi.printUserData();
```

## Documentation

### WaniKani

#### Variables

- endpoint
  - The WaniKani api endpoint
  - Type: string
  - Get & Set
  - Default: `https://api.wanikani.com/v2/`

- authToken
  - The [WaniKani AuthToken](https://www.wanikani.com/settings/account#public-api-key)
  - Type: string
  - Get & Set
  - Default: Not set.

- configService
  - The service where all configs are stored
  - Type: ConfigService
  - Get & Set

#### Constructor

- WaniKaniApi(authToken?: string)
  - Parameters
    - authToken [optional]
      - The [WaniKani AuthToken](https://www.wanikani.com/settings/account#public-api-key)
      - Type: string

#### Functions

- getUser(): Promise<IUser>
  - Parameters

  - Returns
    - A Promise containing user
      - Type: IUser

### Owner [abstract]

#### Constructor

- Owner(configService?: ConfigService)
  - Parameters
    - configService [optional]
      - A custom configService
      - Type: ConfigService


#### Functions

- asJson(): Promise<JSON>
  - Parameters
    - None

  - Returns
    - A promise containing the data of the owner
      - Type: JSON

### User [extends Owner]

A WaniKani User.

#### Constructor

- User(configService?: ConfigService)
  - Parameters
    - configService [optional]
      - A custom configService
      - Type: ConfigService

#### Functions

- asUserData(): Promise<IUserData>
  - Parameters
    - None

  - Returns
    - A promise containing the data of the user
      - Type: IUserData

## Changelog

### v0.1.0

- ✨ **Add Basic Support for Users**
- ✨ **Add ConfigService**
- ✨ **Add HttpClient**
- ✨ **Add Declarations**
- ✨ **Add Registry**
- ✨ **Add Interfaces**
- ✅ **Add Tests**
- 🏷 **Add Types**
