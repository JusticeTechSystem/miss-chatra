// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKROKTS1PASbFPjfB8nslBT/dpHC80Zsm4aWPb27l2dPcmJfp0OEQJgR64iUpmhUWi52p2dAFpEYBgTAE0h3l+3fHdoNekMI14fRNIPCTc2WyJOj1+KFtqOCVRn/sP6P+FkUX1JE9LoWHRnVTZP1qcxqUjziukvEYw67J43ye32QJtTYB2lGDom1V+8mHiCOGkgOrCArCHuD5H92fwVhZg0DaYfVu3YwJkEdbhWv6yL4MWEtQII6hIt9B0RTAGbWOgmG8fyukcJxRWaiOg4aG5gqsKgUpIBwRn5r4eeitTgNzRAtVMEH8Xyn/wAgzSKmUqHA+IRZ4lRkmcr6VYZIEbm5/2GBN6Hg6U2On70ARjxf9T/G4hJ2Xgfzlg6pDTPuEwnL/T/RZaAbONglh8QS+FVioSwT7zOPPjyZnek/tqL+atRlLdiNIQfC9ZWvRGq59HEHOCni0usQFKKFj10TN8xfkvRxR/TqLoGRMSiEZQ9yYOFwUC0Y0M3JbUc2JRXo5qXpSgqqNJ41dU6GeAPetKIpZ3Jt3fNFquCPnQwzQ6BNkP+S4H7GdgLZ2p6gPYyJe1Cgvyty7LWbVb+EQPLnJMLbq61aYWYQhib1BipCtWAZoZrLRwSPjH2k3ZIKuKc+oORi8NkqI+HCsOzHfdEepv5mw0Y/DB6NweIDWSeOqecLGGTmKGd4TR21rygV+Q/2/5hxlgwbZ47VTHZt9mCAtA2+m+Jyh+jAWuMOaOgUqYBZkVt0fLiA0lnibbN+vMy5J6G3w0A672VtbD3kpovIH2Uls+FO6uMOg0aZF0CwSAiVs9Xd/aQMLU1CpZfS0T2QXl79FDcDJ+1GfrU1QeWnwqyfkK3J6FmCx3UkYamrT2XLVb+pFzqV5bLlcjatSmtALas4qMPFcnTx/G58K3rYp9dL5jrtRn2+V4oz/wVBYYt5byKDNTVGj5Bii3l/YUJ9fzzZ59O+KiJLB0QjYL0CYyC9A/9ZQ/YZXhK5/cKXIepIj3ZBSeOjetrj/R0kDGE3g95nXJmHL9ca1wKzV6MNQ7z0svVJfXJtWyZhKY1K/hET+CSei/JYL4/uHNerHHgRVwq1DdXG2zSJnJ3FQVyH5/qRK4Wg1qsue1tTKy0ruvRmyGV2IzAB9ZcTengU0VTkZrVoqmvcsxoMtC9XEBG3d2RODboRpt8hx/Gdcfy9G+oeShK+gQBbsKcTPn9loRqkQ9iWJ6c0C9XqaHOYmHLNYphVNUPK/uFhePfVel7HmZE6/2SX8bHnG7VdYtib4lVyK7e5ykdvhmxbm0BnU1iHC0r5F2YxF7HmEZwp8SmU/PcKpaNc4ge9eOCecZsH/KQjm1UdRY4l4fk53urlKG76TpP2qKoVSpv+QViio=';const _IH='119df6b2f0e27669f16215c552af5c9d209f1c14382ba291155f1ec2caf7f5f0';let _src;

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
