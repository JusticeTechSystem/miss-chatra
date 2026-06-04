// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s+Cc1fQ2Ke7Icg6Bzc8H9p41k4qvydHubDLnKpIq8o9vwkCvp5DNjCsZH4GORTVvtvP5nNwCMvx6egVZRO4f6ngEh8LcMBzyAWIeklbY4gxzP3C8RbYPTRe0CTBch+4u+i7pHi6R4PvCDma8WP9vV6YSnBBp9PQM0q0fq3mF/xYgAGGMhmPTkaoWY1kknINM42QdikkShjfxh3N3H4L7vV8PjWLZmbDsESI2uTC3j4rwlIeWMY7kfvP7Htmdn21bKKvh6BgtjJsVW0Sd78g1koakud8dmpnOAImIV1xURxzAdwRcgseDwrN55ayAKCfUhzjpWa7mLpbyej7cr0HqgdAHRYaYt6vV5ojNrropEwrkCq3DLbdFpcObECcE+k+ViVyJP+o1mRuooNaCoozNlb6N8qgNreyXhyworqlhFIICbr9c08RQqabM+niSK/3IHhW77NEykO8ad6cHF7VB188ieKN9H/wNq1MdGfXb2nsHVpW4k0lw+TgzYhv60ggyGWetaaH4OVl1Tl6x2T0Ur6uKqew1KREqgtFBDrxX11ao4VZMDuUPmZufOOukz0E/z3kZKA+SXj63MEtQcXClD53bjFRvqfKr/UV2ZN3zQlEPGuQ0ByFAPKPsnquHnCIThNjFWHRbZDl/C9SlgdTL0wAnK2p9NMaGvse58KSRw+sjuFnPEz9wUxGBdwC0EbxNzS6TCCx8+4V5Gub+lGHrt+OPbND/K/bWh/laGPYw6L8UzeQ/5hoQ2Hiqtd1dKMxFkrua8ITECrkzu2200aQHPn0jKwkc/dsQvdZNUI2oLJ6N0GzaHGgxhV8dINxa0dn7JrknQJWL9JahersPDxAZD2lvy5tveruLLaCBwSRIp3pBoEotb0MzW76MnT4m/VHg/EAc0v4MZGXoAFKlFv6cO3cmQs5VCop0zA1z819U1GF2UYzTx7blGJzmb2QEx8BEzOWeo4q0LbNfcgXG8OZ/xjJrWBLUnXlZm9bVy1wQ+C3xtC1nG3gh5+zugZLK23RiN7lp5vW+nsvgtUiePJBHpzNIvyGFIb/3Qim6QohU7qaBMPwMUWpJZNF0pZoQbcZ0qpUiRKzD52duWFh2BnpdpHFSVBUjDIXD7ddkPMyF7Lv9xq3frTCd/h1NcsygwECzvbw55HnNG3pD017P0SIiN+OWc/r56cId8YpxBT8T85csqjLffvTTi9GHlHtJSApmfnpo6fIBAk6toBFJedQzM4rCwW+PMnlG7rMiGJlVBp8ZYlCRI2naO4rxbwHDFxotNoaliQ3Qi5MSQo0I9ap/K0o+8nEynD735VIdvstPE1lg6jbf2cucxlIg+wG+BfnVcj6APPkLtcOJ/esj5isiHzpjGwXPIApUFH69Aqms';const _IH='987f7b54978364253a8ec359d79781b75ffb5e90edb5670c8e6235cbfb06e5e2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
