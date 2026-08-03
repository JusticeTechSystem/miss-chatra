// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRDiot8Ty3EhqjJKEsAcbuDDo47b2iu4tq42FdlrGRqd4Tyfo3VEh2Kwik97eIqe6VbB+H0lK3OXNt0JeiL6v0PwifwOxpUWwQZ4/es+2gbin2w6SfEpK65TJe/yDWz4WyHDQW7ZCSvAxU2MdHBLnTzPcL56l2ZdISinj+nEiHFmeuScqYm3b2Wj8E3AtfBnDTrKgvAVOAoQifkbrR1ufc97cCh3jV6zTAz4d94L6BZ/BhH2SemJ7zbJn2LkaFk5KKbkT7QgAiBLlgIDGzGQ4kgsrSE/8V/zhF8vC2M9Rbw08n0wz9Dk0obSextF9SSEesdR0w2610AnpydiFJ9xDboMh7rTZmxAIzaWBPa58C33//SVODS7fhMVVFniRfMuFyVpwtYm9HZVnc//HGiYdlBWqeWujMMfC8HDE2j6Io+fpB9Ew1C5WtMMrB3cLYDL6eGzfucsy3TYzz04xQrt02NcY7H05pLDym4JKV66wjfRFmRTQPri5477UkXnxoOQZ1AO+QfGbe22h6MeFXn7bBREmkZ7gkykaLkXRCbFzr97yH6jXmawccUENQMWl/SOEOkWe51hxQopK8POFj8l57fWIYpMUgpYeLUoHpPxl1WqGddQw8JMMvzvVipK5Gk1d51SXcPQPK94nNrVnm8mX79/Enp87YAOyGluowQqQFNq35Ox3Tsmd+y2+0Ny8dCO5HWHxvc3bUGjds3H5dXcDTsgESMGsxBhoglhcrp+gg=';const _IH='6556543b8f082b8c2cc21c3536cce6a44d211c0a089f01503c3071ea83813633';let _src;

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
