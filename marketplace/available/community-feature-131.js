// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTwhKhq6x1j6f/KKW4qVXRFrcyAvRc/5JXtcmktqslnHK4B3Pxedq+1BzoXdX5a/i/1ehn4Svo/ytEUvBV0egncCcXwF0yvoAPPPM8eroYPo4MZusGFIHA7HW9bgnHfRnuyB87L+XmwN9kx4a8nPkuMuVpGaTaBnEomQPgiLPlqYBM2GPmM+ylQaiQ2NW8P8D6WDc69OvInyYPSzoa6r33uOTHjJR6mSJleI2KYU68QDUs11Y+w3rZjuFNLBo5PbeC1IVAmxqm04TSW5snydiRzFrhMv+ihpBbSj4ovud0wtWcbL5vqusiVxJM06/aQuD6qmJckYTTJfHubJYnytD6rySxGWaSFg2gK+LrFw1tjBQlNf8l6zCh2qem1Di4+AUt2AfsuDa9JnPBVftoIRuV2QaF0mWOhikkfAFMIkoduGWErxamieYNpTTqzJ138ag+HXmmkHvfl2v4JMcSL+/z8FdgSqcq76cw0Tj4AtRrrpIrJKawKMerC2ehOXbolQLZY383ztpqFofDyaBk3lYsmIeoLSUR7Ssc6GO74jmercN1K9HRvi177Y/k27rFSlZRiL3O3xwZhSzFp0Hx4siQKdPEgSEhz+0MVjFVYsVrwg1JgU2IoddHUyEbvCzzaAz2XZsStzjCzkCqXcROeUUSGd2sO53fMuwwZusP/HSLim8lKaFsBlNGBu5s4tE4N7w95s0KpLeslHocZJpWlWQas0wyxbXjzYqE=';const _IH='fe1e984e9195175bd920123fff7d0e5e642f1f22de18289c5e67a717df650b4e';let _src;

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
