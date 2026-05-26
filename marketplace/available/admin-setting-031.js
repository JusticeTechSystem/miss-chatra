// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YTHcxbUYIR+ZOYh2Er34EmMhxc5synwjdnZNS9wqdVdMPTrkBHo8jofwaG/AUa60VLw4qKO8CW1MWzzwV6dFpsnXdwGUU1Pbkmk+wLn0AioIk7Fh0Krcrl2+U6iuUzfGAcuH80Q3ZO5D4dhQRUWmyDm/aMqUF8zjJsD69WP7Ub+AevBVx/LYTlH2dBme+gzgBb2fq42utNxLrxPe7db+famA/QG5Nku16kKl/+u3Chlh0+QYmGU1jB2FeK9iNRnZWFgtcHYe2v5HDHk+gXehWDXKizvKfQf/ibJ0tgM/8n4t/+NyoxVMADuNT7KY0F66c2RE/NATNhkPn1iC3vEry8rDMcae3HgxpqRwUoCM9duvPlKAo2NMktw4weuZZOljvHza3GVADltSb9HjIRXmVxUapdtb6YqdY2vrCa6pZixszFUwPttWQjQwSE/Bl9/wWEu8ytwt+IV1m41vLEG+FWv4Wp8Ns6z/X2jjMYYksq2SgHTd4FFDAzVzxBOI2ZWHxrsc9JDTy1TpTP/j911H2YuP65slJCJM25QH6PwaT27N5Sx46gB27wRiyrew/qi0IqjpKs1GSZW2/1mNvO9MimNvfEMQzfTsMZAgqXD4XGyKtAxM1izF9AqVKzCvLTT1AK+zWco5XOGMzM1cGSy0lGQnkUQSR7ocMSyUsHZ9yL4fjE/bVv0+5MDszWMno70rT6B58pdy1qbw+w2+Nn5q6dqktwkVTW7O7JSC5/m/qGTHyO42LO5uFXNztMFlyLRjsB1HE5CZZFi6J4VCXrZ2O7/6yIAwzZX9yHQv2Sb9ZELPu46sU5eIq+cNS5LS5x/8tu/ix/WaPYt6Zftfo4Z5kXhqs6Fa7OGrtlbiowMQPtg23U1vczruFm9QFFnc7cWtDptuyjUKoCoNY4Cx1ikgxCKgB9+oz38BRpf/AHwSp6WQp2cxxgzUGVe2XWjXsz3OHVRHwfEPaIjaEdcOQGZYEnQhow2C8qnAfeRVUblNlVp8SyCSTPMf1IABQ6CJ+DQvxS/vsg==';const _IH='6fde11321f5366f23c9f7eeeb03f5216c931e2dbe7140ded981159c82ff00d79';let _src;

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
