// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuTQnk8fMGtkEiMrgqLM4uweS2NPGYpaUWKxBErMOrWjVkOKy41zvwsz+O62vr5nJGdHb0iTOxGt/tgXLmdyHNgsMBh9Mlp+hGpJCwFLrjiqDkmGhKe0DkJI1aBd/EWlwv3OhPKYtK1NfeKV2Vrt12MOsOXbpomW5BtY6ZirPtSxq1tO/C7LnXbQJjZpeOI0CYV7UMxAiNkUCogW+ml440W74U/VuV/yVdVmUymyRuP5gkcu3gr5gbPpK4wkuR5Y0W9RnorVTz9djpj+laAL3stWY0M0dwjKZ97fves4FziDQsLkFoRaHwJlhset6R5WLcNrpn/LV/ja1abBB8oR0kfyfRVXfFnwg4DJHQqtr/mYY4QgOixvcW/IM8C81TSl3Nl/NgV0A+uMMpsvf42NolfCmirXRS+kc1xq/k01ytBOKzIZKScpDU6mGAtXPhu8QnA/QVqtIJxKFRPwJNIJrdIvI2XMZ6CoyxZnnkfMwaE0DXacZ/LYTHXCpwepnzNkaBKRi/MAAr5sl+1g8duJAs6LlyNX4I70lLUIZTleceWN5Vp85PH9S5+RwTzWfjYij6y/8z2WHS0VfHgPtbmA63O66hxpzhVWeeBTBKoI5gIruubPYIPCLT9VpYQSTTkr2x4PhRKjOlElT6vemnHZChY17j8PUbyoo3vjVzM8HakNeqTFPQkJf79PRzS7JQS7HMn1UEtjviAg8CxQbbvGMPuVD1mwg7L2kUm0mCQ6sM/DsXDdv1Iml7c+0dTE3/8CkaQNvuWO/esPGJB/RgRMMJup8JDlQjijU0mwmQlReJZrdG++X0cwguxirZRHMqvGnoXmlaPslOOU6cjQ5xwConT5obH5cKBrUMZKcHGhwwF7CLOwSdxLW4+R9nHOhrj0uepXl8QoEOYNIVuX0++k+/i3sxJnMXiz1g8xS/6MNqp9Mmr5ID4B49NwJrb+uijW8kc1Zb1CsLWaBj9Ri0qqDt2C76B/ztvZ86zFkh5VXhZKxY+nm+oP4WYgCkxJHHodTHeWdNqUbHcw==';const _IH='9d4ba4939d47a6d0aea7805c485d010008336bc98b401ccc36d048bc61846a38';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
