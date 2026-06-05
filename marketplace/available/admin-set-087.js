// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uXSp2fhowvdJ1ZEcCoKptxxhUWJP6k3A1YlibX87As0cXdwUSUofcdweY2/RnMn2NmC8IX+CCuSg17RfMwyjKuPPci83wXS9lnEPZ53FFNeJ13ZOOadSF2p4gl6uRUIxZJYkwnNl+aHqtqZtonIKnCTQrNu7p9S7eyHYX3PMlbl+TuiKALv6OKq2Y0WWfYfdEQVbcya0tW3yg0AZnLVuDqsuWj+xG76BhCKDMA9OBYohpU2mhDF1bSixEa/tFApkcD00uV4LXMqUUvq4ZmQWd6I+udalEy90PHMWCkRPtvt7HT+CpcIHX8tQag+kevePXNuiplJQcJXJ8pBEPHMO3eb4dTq8ckprxJUD/X8BgRvJNbm/76mkyKf6ihGcmuX7Iw9UIjh/sN/+V3YgOo/O9p9bHvamxjnhMwaraKN6iKevGgVVw9utt57/KW1X0U/VtRG514J6PldUg41sPYVqXfdR3s4Kv0ZixQVI5kP7Ele/TyeJiCRzPmOrA8rBbdcsJBJ9l0mZ8wO1tZHwW/KEgaaEC+TerzXFTWhFM+7uxO9rtVAZ9sdYz2oVu2zlhCuQmkE4xfmtpdq9yqKiqkIscJ2zLJnW7FSr8MFB1SgYKyhMF0dN9AI4yFf5YINLAHht6MjAyp5XYKDWgJYM2w2BHHgTcUYxkp1QTG+A5094G1UGWqmW56SiMJGuPZ9mCAH91exeeEF4KdkctGOVqCP0wnPEUrAtBETgicHAjw0sRf4BqLF1bj0OsXPPejeQ0+Ip34okV1b2MzPz2WdNalFe80ac0EpLIkOl/hWiXvIbz5txIKfJ5Rp0Pl8bvVPcy6ViWJmuOAoy+PW5KW97CJMyAEiyirz3w8eN3iVelBayUFeSCF9cUvExrdHWrZHbB2mngvAWDuHY27R7NQ1WWJdqwpnZCkwFG5CPM0Q08McTQn7T0GP8b3MUwqBTYBOySKyGOiEzmuvjOZiys3WhLjho0nK2X4IwpA0Q';const _IH='040264b175d1d7e3d83e8118d553283263ae1cce71d993bb8171a24d9796a769';let _src;

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
