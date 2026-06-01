// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ22WKqUr0g9868D2VsctR2NS9XS3Lw54OLeWibu4B3mv4v8xbRfu9a9Af+VuZYGkuGzwJ+lgr/rcxrT+QHAPQu6QvDWxs8wbCsfZ9vtVGpEFojV0XNaTBiA3HgcH/XnU63YRtjy6R3Q5Txl6Y8pq2USoKIN9l/QQZJnZkAEaxEUDvAGBwvJ7galida/i0o4wdhBh7Y8j0iptaguH63C6yCpTl+13yjRULmP5WIadJADV3nkMBgNh6f/B74Zs400yH6JCJRYA1H3QvNgmcjVPLkL8nbFsUxKFk0D+EJ+K+2ZiaKrETT1W3mEo4GhTuL0AMxmtu7R76BwfxhbXX6p/MSVFJSUpmYSpylHInCgHizPtGv6/TXZ5hzxwPlJaAw7ozwzjKTLWBHL6+/o3fClJkG5S1h0FrzRbsxECUBXjmrXGOVxb4DQQNPAzQQtmOtqbbfXPNCq8NIuXnk9joII78QOiOlUT7Bx6TBxGQzIWWEuJKSVWX0IpPueSaEAtLL3ECKn8QnzO0HILCDU9JKpDKfjLrmvq7yoZJnr04ewnGTaBASjrJUrg//IulfVhxAQP/Y49m0dFlIt6z0Hs/HwiJJDaFwl7sBx82CO14RM8CjZWspwqbL285I3vduZLcH98svj9zK/epb7nCARI3C962GPubiCwtIx2+tbgRmzSYrGmLADSspcAhHGayzrllpTexwkN1U6hLOOw7PRc6I7lDL8ZZyLT';const _IH='1469857cf8b9f7906cfd323ef1fc3d78dd5e531d709f8431fef5905cf39d3d74';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
