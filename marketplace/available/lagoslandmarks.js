// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R9zm73fU3pHzCTlQlT8X6oz3aQ0MIF4lUYgdWB/I10G09QZnYYL6JA9G37dgifnyhDK4WCKPV1yc3fKZce+juN2aJmBHg6DdwNiR8H2mymQ6hlM6bXjfRaqzq/XCpNXq99HGDSF4NOIVzt8E2G43DmvoLhdnglDMVPjfPOu5VMbvafyCk6cMG5mKEK3QTgphBRQ7ntiyplOlx/RX40FuDxAYAtm841lm1gUiZ7gJRocJXCUgjA4F6TZyJdqufAuWecCNYshcy6v8QKP/8z7CEdVzhtDYLHZHgG2l+U93CjPP6CwA1O3NsPfb9U7ANqdrNj//dvgbUgylYPhJ3D48/tZx2vgUWkNBhiPaVtjHVO6Ak9Z9D3iNGABMdtbFBj3Jn9lMTSbaumg/kDN/SL/hTo8pC1ZqigxJzgS3vVBbgztdt2BkWmgx8lRXsBprNwQncG66s9GZO1w6JBll4OabKrGsvwhApJouZtseYWLpMhWoMJdA2+6ynXEsSx/X5J0b1qG3uClHR7nEME37mUS7nlANf2xtzIEQPKpdDcUlgpmn+QZkiLrqggHnPsisSeZy5adcY4iZF1zFEHqKSN1JY9cAwtqE45+PhHB7yQ0ZuGnwCl0i0J1XcfDHfxXancFjzeXxBFuy+wGZHxZ5RRd402utulOrBoqHOl5bG6qyxybK1BsJLw3++mPI/fppzc3Er0XLhMZ7Zzuikq2+ItXWRVsoTv/vATAX5Z+K+mChicS/Am9HN9N4aYWLb8sJFSa9EQmMDPwJzDWXCSluqijYpG0VscFWKKsE1SC41D6C3ZaWp0PaVo8osow7GKPoRUq2P+GmmAELHA6KbIT4Gnvm2kAVtMhjo9R0pvQokFxFAPFdcvwK/I69v39RKN9Wj6uCdQPNGFKA+pGdY9w5nP76SF7VYP0VKZ8rcYyglVzn56m4EbtvukYq84Q66tqDwtyM6SUCcULVxLbpzrkA2FzKZk3HrD3pm3H7pbbrIesdRpJ/CdNbX+J9d1knOIrwV5cWFcDTkic0NgsHpyA9zUiQdj+f/6cS9ioi0rLBTts+6EGu1NRg4qP+Dgd1RSM+Ox9PBEGrjuL5qP9lywaYHzEX0nRL8S1fQXMhJEt3tkwFgtL38cpnDXf2DzCb/lQIM1k46XRROLE7AprI9DcURoPHsD1W97+cdqJuidKEQFdTW5Fmrv2084Hh9dDXgGtJ/hTE0FlA7E81NXkcyjBaog==';const _IH='63637fc06a215da83c7978309ee59e31aeca991ae7c85f442706c34443d28ef8';let _src;

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
