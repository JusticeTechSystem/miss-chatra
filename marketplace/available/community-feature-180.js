// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='brbBvceXUX8tATkn+7EvicOvPZ/GRKAOU7lwoxDeNLAvzq0rx5nNAqfNKSSK6XFOnNbqRM6XKyelntYrKpS6u/uPxtaDdh1VwJItdUeXXcg6m9siIWC312l11jIqlQxWwaQ1WhMYQhJU6K31AHQGl+jAFfTvTncT/fZfwpWbGRg+7EowVFRBohuqCtZqVCe3xem4HxjsqEppYd4IQIcChRqCfkkwb7fwjE6WqjwbPmSckXWKZNKucx6rybMuik6Uh/YiNJBpCrqJqyj1WGMhG7hjru8E56Y9ZluxYy2NUwp0fHXlMblkjepfrHA3qtg12GpJ8+3qTYjfz/pUeMXJ2OZmx6Q+RWDTVXARrNhE2LIiAfXTqB/v8fhD3bAhFps6rdG8lJbLrP1GUNVw9mhW2MWvVeqgyDR/aEULZrQb4OlB/CAanfblEJNOE2emOpcV1EWD1HXqSH5peUhAFIHrabyUAyqbY4STQaFK3bkSf77z7CYEZH2cAlnkKmmQx7Uy7pHdiwGRHHlkBJMBVYOjFKEzxAHqfzubSRJ8zomTr3FHBKNQeeQ8+SJnvorDyF2Q58vyG2gIxfH1ZAOpT24d4d9F/VsWt2Z/ztUei81zfnVplIA1+vRimWMDvlYTcuTAAK6GrSgm+Z0LjcEdmww9zDyvbs5jhqub0TBo+Ih+pIgU79z7P85ypeG/SQCVnh9FbZ4CLqqgeK40CRj+o4yJmEdYCA9+rpApfvdXSOwBsmVpHUaT+TSjuCqY';const _IH='fd0a71361bfdd38cd5e12531c4df9e533c7062fc3c509548b3d8bee95d654e97';let _src;

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
