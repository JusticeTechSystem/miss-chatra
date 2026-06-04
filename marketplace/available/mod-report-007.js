// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KyJ5Ige5zICrRhwbH9aHhZEPtiqTir3IcakTKyPKr9l2K7U6JW4gMqIp+bIqlFkJWUte6UnIz6j/lvqbJWq+xdsHj6BS0shhywqqLKOctKomgTd/yH503kIuclXQsppHMxUnVZDK4chzZxjCZHEu1dRS++Mx6RF89iSARJiRBL1DSvvL33WSAm4PnYd6Wu8Vejti4nhDcDga1/SUqGF+twyyMcmx+hQv1fPssDMLeOndUXNRf1LzvwFi+Jf5sGPcdAfsxkQNh8FUoAsfBAh4dJQHpkAqvqv1QuEhDrnSVA+0jurf3L87454eJeirwB9dUZ2cX57aNSzThd4jbZkjlorbRvg2nqpvEjcxhuNfgUVO38mGsz0refBZOl3AvbjziwcyDlKlVn3cBNDclSg13Qh405ajc46OH814FmAMYKTmxHihCR/wTxF2CIDHMKFP9c+Fnyx6GTdgHGbctjzObfS5TnlPW1bJJh9QN/6ai0ahAsfhk9EDIYjMbKHiR3VHnvwaeMTZLYF1DDEjp7n/oRwzoJQXho4SAT8YOpklscvyHJsWWJsPWttoeGV2Z85KiEJUPPMt2cpAQ5adnpvEzysWfa9Gm/QglglLsOYo5oFUEMXFhclI14/L2ep52WgdDbu7LbP5ES6zwY90MN0sdeDECbw5/n4vt90ScITWNBaQXdMq3SgjasLNqij+e+QB7/QMP31MqiA6cYfIPFcZgojYy5TbiXQ4WN6rmTNchTyUNMDZRqbisZs6lxvMXKrQPuney9AxLYkolgR1JjAZEYzd2I8d5/UnvC4veaRMWU3rYkuXFVwdCB+kuZhHdw9Y+Dp+ea6uJIo7awl6h0ZTXGKQURrHGHhh/7paHHp7oqExWql1JioQkL+RHBtsV9fezAnD91MurWXcdVT4rd8ZP0GClVfVjGJqF/ND8u0Vf6Fe7c/FwXqWyClG/knDCCzeihAtkvAuZWUbHupQOWsARkqOED44EFJnjVpH1CgAr6yd8HdGiGv+mLeL3Spu8FR5YKTt2hIBPdTmwpk8V/TVI/5R6PSv5ccaHPixsE+NKwCJ7TW9EwaFcS2oGj/7KG5NwdnlIWCcn/wuO6ZOl4hV6+nxvCsGwq19U9r7oq02odz10XmhhOAI5IbRq03jrGv2kaGPw9MPmWO5Q91tKk00IMssdFqYLVv8reaxbFUBV4XZgsppwq5D1jZXapOK2BLz9J0VLLb1wwNNvJJw9IFlnGF7+9AmbXurc2mwpom+SwZpQlW5RlwXQxRlQCErFKT7M5bZi57C+iNMk2i1MT2vqE2F1UdwU8tuMAlWyoN2IYAz/0NbeD822w128fF/KKE73KpDiqvRnb0nUoyWyTV/dEpZXD1rn2effkglOxM3';const _IH='c01e454dfb435eddd5988096382a205125b51943e0b2c610303d36eeed454e42';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
