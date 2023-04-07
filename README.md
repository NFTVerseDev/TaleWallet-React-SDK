[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://www.npmjs.com/package/tale-wallet-plugin)

# @nftverse/tale-wallet-plugin

> This plugin can be used to integrate the tale wallet components into your own react application.

## Table of contents

- [@nftverse/tale-wallet-plugin](#project-name)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Authors](#authors)

## Getting Started

These instructions will guide you how to use this sdk on your project.

## Installation

Start with cloning this package on your local machine:

```sh
$ npm i @nftverse/tale-wallet-plugin
```

## Usage

### Import package on your project

```sh
$ import all from "@nftverse/tale-wallet-plugin";
```

### this all will return 5 components which are

- LoginUi

- Nftimage

- WalletUI

- talewallet

- useAll

- overlay

### LoginUi

```sh
import LoginUi from "@nftverse/tale-wallet-plugin/dist/LoginUi";
```

#### To use LoginUi on your project use

```sh
<LoginUi />
```

### WalletUI

```sh
import WalletUI from "@nftverse/tale-wallet-plugin/dist/WalletUI";
```

#### To use WalletUI on your project use

```sh
<WalletUI />
```

### useAll

#### useAll is a custom hook which contains all function of this plugin.

```sh
import useAll from "@nftverse/tale-wallet-plugin/dist/useAll";
```

#### To use useAll on your project use

```sh
const { handleTablClick, defaultOpen, fetchList, balance, images } = useAll();
```

##### Now you can use those function in your project

## Authors

- **Syied**
