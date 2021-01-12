(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{593:function(t,e,i){t.exports=i.p+"assets/img/light-node-image.d5f1877c.png"},797:function(t,e,i){"use strict";i.r(e);var n=i(1),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("NOTE: This specification is under heavy development and is not yet complete nor\naccurate.")]),t._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#motivation"}},[t._v("Motivation")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#structure"}},[t._v("Structure")])]),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/spec/light-client/verification.html"}},[t._v("Core Verification")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/spec/light-client/detection.html"}},[t._v("Fork Detection")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/spec/light-client/accountability.html"}},[t._v("Fork Accountability")])],1)]),t._v(" "),n("h2",{attrs:{id:"motivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),n("p",[t._v("The Tendermint Light Client is motivated by the need for a light weight protocol\nto sync with a Tendermint blockchain, with the least processing necessary to\nsecurely verify a recent state. The protocol consists of managing trusted validator\nsets and trusted block headers, and is based primarily on checking hashes\nand verifying Tendermint commit signatures.")]),t._v(" "),n("p",[t._v("Motivating use cases include:")]),t._v(" "),n("ul",[n("li",[t._v("Light Node: a daemon that syncs a blockchain to the latest committed header by making RPC requests to full nodes.")]),t._v(" "),n("li",[t._v("State Sync: a reactor that syncs a blockchain to a recent committed state by making P2P requests to full nodes.")]),t._v(" "),n("li",[t._v('IBC Client: an ABCI application library that syncs a blockchain to a recent committed header by receiving proof-carrying\ntransactions from "IBC relayers", who make RPC requests to full nodes on behalf of the IBC clients.')])]),t._v(" "),n("h2",{attrs:{id:"structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),n("h3",{attrs:{id:"components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" Components")]),t._v(" "),n("p",[t._v("The Tendermint Light Client consists of three primary components:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/spec/light-client/verification.html"}},[t._v("Core Verification")]),t._v(": verifying hashes, signatures, and validator set changes")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/spec/light-client/detection.html"}},[t._v("Fork Detection")]),t._v(": talking to multiple peers to detect Byzantine behaviour")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/spec/light-client/accountability.html"}},[t._v("Fork Accountability")]),t._v(": analyzing Byzantine behaviour to hold validators accountable.")],1)]),t._v(" "),n("p",[t._v("While every light client must perform core verification and fork detection\nto achieve their prescribed security level, fork accountability is expected to\nbe done by full nodes and validators, and is thus more accurately a component of\nthe full node consensus protocol, though it is included here since it is\nprimarily concerned with providing security to light clients.")]),t._v(" "),n("p",[t._v("A schematic of the core verification and fork detection components in\na Light Node are depicted below. The schematic is quite similar for other use cases.\nNote that fork accountability is not depicted, as it is the responsibility of the\nfull nodes.")]),t._v(" "),n("p",[n("img",{attrs:{src:i(593),alt:"Light Client Diagram"}}),t._v(".")]),t._v(" "),n("h3",{attrs:{id:"synchrony"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#synchrony"}},[t._v("#")]),t._v(" Synchrony")]),t._v(" "),n("p",[t._v("Light clients are fundamentally synchronous protocols,\nwhere security is restricted by the interval during which a validator can be punished\nfor Byzantine behaviour. We assume here that such intervals have fixed and known minimal duration\nreferred to commonly as a blockchain's Unbonding Period.")]),t._v(" "),n("p",[t._v("A secure light client must guarantee that all three components -\ncore verification, fork detection, and fork accountability -\neach with their own synchrony assumptions and fault model, can execute\nsequentially and to completion within the given Unbonding Period.")]),t._v(" "),n("p",[t._v("TODO: define all the synchrony parameters used in the protocol and their\nrelation to the Unbonding Period.")])])}),[],!1,null,null,null);e.default=o.exports}}]);