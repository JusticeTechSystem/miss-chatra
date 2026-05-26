// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p9aQN55NlczlcfdtsHCwKJ2aTPvx3RL6zltYb456nKzWe2pFV4YH4Hysr5XOecCkT/EXJAhf1ZAmjTB6Cfx6utuUPAz1AKKK6Xwk1tVl8XMBtnMUd9wfbxxTO5CalrdDSjs0ey+koNGddDV2aMeDveUx1k+IPq2HplvBdTt3531Q6d2ORun0YaxkJVQ9JZFpeM2mfH1Xitv4xCLl6oPGxYJ/nZXZJ9CWXcy18UId9RLSfV3t9dskp0LsS0rxDnr29AZWmsG3vlD2LCb7WEQyC1yKtZMLoG6fcABWA5FIC9oFJldhE+tGO5gtwGHeQTAMLZG81EHMKA+ikFd9IR25XjEGtMsz/lngab48YUrk9kck3pdLFD3SsMa+noEmkPNiBwGmuRw2wi1n1ajROilMx6JnZHfv+0q0fBzRdC+NnONb8Y/kV03f9WD6SOesXNX4mh0orckZNgF1QqANzEgg2qDqRzEaNyeMwvCOM2hrMNBUN/CASOg8y8JgDVkY3iPugBuvXI085fFuoVXDumFaiklfo5v4qF7YnCMccmb3GPLpvx0OQ+M//pqHw9czBIyt9QyRv3z884ncjcDYyiCm5fj8QYGj57SUpoR01pQ2uhE1I3xC4LmUQjw4ffKgLJL/gEwWt+cT1wjDNxz0mq5ApMv607VFzZAg54jQBA3KFBco9GruClCvGo4TK3Aul/5V4xb2yQvmL32kJSErfpSpmJPzCoZ+levW7EQe6ahGpzGaiw/vWh+jR8eOKMaEtTQlICFjl1G2s1D1AOcVZVV6+q/YHTffQ1vm5vPKOoJR3KCNpTEN47DrEdFOrgsOhH8NcJZH84zYnMVOswJq9ovhOkGjoJ2VRYf6XgmkFZDRkZgakQ+IdpVvJmbbiwjeRkoetBMMwIebF5cC6Dcc6b30cqyrkslmd6CUsFCb15sWkx0NCFFbD9Aniev2aNYK/A3KEMhPkyaEU0j6piU3e1U7e5C5C+hY1OKD1fGEeRy6o+IltxWRIurhluJN';const _IH='378065d04421edd16c2e5e31cc25c6e2def7620e3e8e3caf0f54320c25a4b90b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
