// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9BQ6o4kGzydmvsxVPYT4gAXkY+47egYZPVpaZ2I1q+rGbaPk/gMiAlHMGGbQg/7Hr3xflqVhSuZvSSPgLvOByZlwgtX/k+2FI7rFh5iGd0HhRDhUn8Krxc4NCJVn2d4ewJ460DdNqA/qLV6ysZUc29ph9pUsdXtMdjm2oUh3/rm/zXH8khBf8fww6VWgdkky9JoIZM1cB40DG6VuyOhdMz4n4qnMFa+DASI/VFyv3WNuXwK9Pignt805JCfuXUpW5A6q7Fmy5w6pYwPX7fUeeQhC2Mi66Q7rU/bd+TT2dlKD96zaI/PLcJUuhMQt4FpKAIyCgPt6RWMz6Ae0QxLncd9E11ai7VweioR4lvWynC6HRtR5wXYfX36OJJzaZt2Pes58+AsJZxEoHYmyNbhevvvrpQxdpyoQKkirK5ccGVP+9d0FV+DLHln3oYqTX2fNXfMjbL64CjtZ4Xc0H5LMQvMTBZ0FM0Zk7qPFnzjBgpqKRJp7JpaQQswT6R3AHEtTtrKPUPClPFDt5kgphA81upxqNRjoTG+DHpMuGSdQNwibHhTEi5nkMM5L7WuHOJC4kG7P/sNQpBwwtdtnylHa8adlVx57SeJyvyEwLepptO2TmC2ZSryKlapBFSKRRP9/oDDu4BbKeZ884Tw04rJOwhKD0n2wAjzudf+ENDTAEUhuoMrllj9Djy+hQoMLGyQxwGzKcmiIDXnxQA==';const _IH='f665e5a627d4767ec2bf5cdb2dc16dda04d9903a8d5e285bdf8fc515738e3ae1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
