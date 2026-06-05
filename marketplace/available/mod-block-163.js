// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xyZJb+1j9utctzJsFbten2DDtdpt7yU75OaEq86sGgz+hMCHPmrKrGT9g4zu4mdhucHsXtfwfxXwB3RNSvLBYJGSVlUUJKVxSod7JHbYgZc/Z5YdpoOyz+9MoWdRV3ddzPCwFtlWNMNBex2aTUNi3GGO42Bx9x9ebHFv+IB6Bu4zEmKF0USFgn9IOylJzgwAYc993YQxJbnrNMz/NeexQc+J2rXKaFZuhdAl0mioDO+nZKqNcgV6DxUOqVVhsTc4XB6BDJshvOaUloK+CpNajta0yKmiI9ThoSrrIls2yIVRdGD/jorhper/tZkvjakOB4sbTdlqvn/tVLt4UVRlmZDg1VVsQPyJF7l/RIlUcDIxx+PUb3nNTo8zHEjxNgMLqfWd1fEEAWv8MmlKYD7/hen0SvGxOQ8ShdhobW7Ayppd7HXiD1NYFvQwtpal1ij5FKPFRtCkbMk79SGjlSdD3I2A27waSyMYCrGf+NBMLQVbZCuCh7s9zEmFpoOEvZUajf29iZrzxi37kPHfppspUHMPephVSWvNdUbqHyftftd4jhE7X2ccEx8vtbyv2yj2PhIDX6Ep4i0T7uRTHY3e1m5yuhnrhCEAlchsFu2jVb4pci7eei2NpGK5GAIK1oxWrZg4bNbYN+bmIrTT6B0DTPeaAeC3l7Lu3tzFBV5JJlRhqSR09BGrqOKgsmxaxtn1PgdYw9Rcgmjx3AWYhUS3IkQbruZ9c1wEsjUmw9tZnhfndd1fHF8RjKMvlk9PeMLR6OM6vglW63Qj2P+ZKEzmnCczf7TGc+oaAxLWpMi8YtKTQjjrZEtc5/Hw5UGPL/tD0YxVrH+aNEqs7GH6ZP63Rjus7CTtPAs89mSAv/4QsnIyY6ttvTUj/EfzgON/zxdTw7stMad+f3gIps6WnlLK2Y0cfK6UoFrKFmc5VuZ6Z+9M2hqjhfLHbT5lgqbH+YVQ8mvZtPtRdRF3imY39/yQ+Hs3YBdpM1CcdqYmTvlhmYtCqm3iEgUmbOPH+zorzYNs5ca/fk+NYOq1LE5wFBLIWN0N1ldsitn8dhQL9vAGRxJ0e6iKGtYRoU1DBP0Isx884nykaayvydqGE8SWa5cjJ4SkD7UcKrhc8P/Tvuflvka7JTQQzT16GCmXRgB/qwGxMHXuFbAvrT81zbECAPtCh+g9aUNazn8M1kVidhHFqcmYRJIDnnAjVnFjORlrcku90/rNhiYPbGD9Ha2rGBVMMgLEYQ3C1YKVmGmaBc8W3UjZTyAgZ60+Ihphft/JeV8ceQIj+EfqhRxGyZ31v2PTlCvO/zA5y3IXliwxotiWzGWgklQsxQVcNka3HpVE0gG8V4QG7Hh3qrbSbwQ4ihKm+mNeShmnoWceW2rN3/XI';const _IH='2abae1dad851dedd5a463d553cbbcae6bc516528f93ea0e0238d3be0eb51ad9e';let _src;

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
