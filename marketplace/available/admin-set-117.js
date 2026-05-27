// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ufSVmLm5vSstqgoCr9AWGZeMTjOj6BRtAEPsufi+XBjaFrJ57jjPFwLwTmg8/VFTn+p487jnkamTA/6mlTdKCL4CAPjBh03vCt24q3XfuV8Ty9lKY50OaFSX3FrhYm96k7fRQ3NaIYUfeiTh/w7AHQZMh3vT9GPqB/aQXRi45SqcYePPFnLkcEAabfHatlhVZODNOqXZCurLUWQEl8An+NAEw6SvkSKw4a12VeosqIQOekrgcipcqBa3zNtetglkS1tvL544oRgvJOf/0vsD52cYx/OgfaEo5reN2bgp6mdP6WZcOzGmWWaa78GnNI+OMMcYe3Ofp95u8K/YjXJH9G2Dxdhygpgg5marVok5rFo4/VR7HAFiEHLEI1AL51Ja6rv2M8YHm0Wxb9sYkeIckpd2qQsMnHoBwzAqDLZa94RfjpCOLh1WAh2CJJ6bfSs0E3eZEd8lO3TXcn01+6a/wlWg2ImPYgXiVukQsVcsanm8FB60Wov2uL9WADzohUBNwFwwbj3K8IO5BX38ykEcwGuS6pdVXlJDjeRy4cTYSxrWW2HRsOus8AraZKVTo011+SkvPmLq+1WKrI1NVNYd+3qxl5G7mnHKzFj5uw0T37ayBTeNKx+SP8ZQT/oL7HUlJaOCT0Kb6GPOCCl3sG1NBgyv/MKFpLMWTfulbJBisoxE7xzMw2jQDH0OqEihvcpbmH6Ryqq6KXvJZ6DAQR6I6tpymbT0DSIzZ/seEB0RsQIbBLvotvVvTg56BhtORLO1M4CWn2Z8FTbi8tZZWdhKaG6YkRNcRjzdqJMjXctwuxuc/5LgG+HtPPch0AVCAFQjBq84wJK08HNR90jzwcBGQQiWfGOTXiJMRTHOZvMn/WFzGNBz7UXqXk4mWJ9wnG4yO5wgNvL/+ry0GnW93nGUQeY/ugBsSKO8XIUVr2o4ratYk5TBM+hdJxZ8R/YODsDcD66xye8xLqi5zhxhkHpUl8Am3dbmmGGXgfIZeA==';const _IH='7bf4e9e2ce661ef47be82126205a832f5cfc4bba8aedc71fd4b6d5b270cd942a';let _src;

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
