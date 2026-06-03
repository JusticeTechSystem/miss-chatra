// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HRjES+ulBWRnPki0UFiKUpILm3Kqriud0NJrkZjIko9oabKWKjaJizM4fQuH1ykuvi2nf3A0XBrVhl3GD8adxe126T8MmWZ4zbQDyGRCMsxr0sfEDCu/0eBphVms0mf6M/5M43sQKNopiuVa7mWbSJ841b/LyQzFpJ0Ki851caATGPjtTX4KUROnQ8fKyEJRJZm8fZbq5WaGD2z5fF2Dd3K6HjNRfvq9b4XBS5sStRP17USIb++fkIcLdqKbnEwfXDAxdGoo1KGtcHZauhScTkXXii9+iSBa42CcWfBiUZ30w5XqFXwPwyYI1EQRoy1d98ajfX8n6mWql6ufq+10r4SkpxQh99SKrFFlCGDIXkj5agMU4AEblvlyc6zvFOp22vq3dSUnKpGd3Qf+nyBPajPQalujUK05EpQYr/eLrUBR87axBuBvTpgnubLZ3zhAoDZqbXOq0j4UKa1nCPxrEd1GHUPVxx5ZruFYt8re1GAOAX5XMw3/kLLEHf/eiHKptmKsoLiDOM1aJSFFkouFUCImNmZPjJs+aE0gDvoWKplBP+i5GNI35gdFDLkwaYJVk2KKAsabprv3VVRX9kVzaDM90UvIcvy6nO+xyTmLdjRvaEAxH7s/N4Eim4TcyWfY+onjgyyacBJeeHOxWVexZC6p7qpqQ1UlPEY/fqjN26TOam7RtKzCVw11sn8UbDjb9Dszw3WWwhU2Mco/PMRwKh4Fw0xOmUPoAg==';const _IH='e7e93a2b7868ca37b618a10617209717bd7e79384b2df2074a858c32b13ab8e3';let _src;

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
