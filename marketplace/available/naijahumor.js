// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT91W8wRNXdu0g0gtFcUJiLl/8C9IPCVOB1xD1YFtLJdpUbd8v7R6phyD/u9r3IVM5Ijhhr2ea7/HytYvRdCby20MTQB/TOwdz7EC7N9AyVqFfH90nuiKQ4cjNnrEAUEuQMqkUuImYpgSRX2x6xgWqxdu0147PpszLkZ6wCvbnSImjJfxtcQUAJb9xxQaSt8zKIgy6zZXO6F6wCXohHrR8qKs6X/1hnMLeeU8//2EYHvqFpEGmCUaEDPP/7UkZLKXh/b9MdhYrcSshy7/G9AF8VOjb+nlFPK3V9fchl2rzWXFpu0yU5d2+1U5RVk8RwAA8EP66R1VlkNz8U3MZya6rXnVKoXKv/NbrDt2L+/fFtuMQXew03TCDrIn4gFQTUgnUswZwx2sniNFtJEpLtQCiF4zaW7JorYh+e5WiKYCXl39KgBzOyuPD++kLliBkPZN39K8aO9Eet2JISamKWYscPUqOeUmZ9JZf0JV3K6LlXCKLEt97WGJqC42CDPLqjSy8+TPx45Q7Th33nfdmYD26RAvAYcdunZLxTaKolpP8seSEATHGSLS0b1L79dEh7mSGGunGYI2b5OVXedhcAhnl0XZlrqu0yWRbdF3W1wEAgEoqu77rz3AZtY2MsKzBc0tSBU0HTc7ZImkeqnecmNDLNGpG83kWhkj3UcjqGYHgf5m89aeZkB0aHnTKufoUXXsNBiG4rsBKxM/ilqC/YHMTqp+4nD0fopt/cEdmUcNJgHF/1hQtPZDuwcoLJhmznrqiMUnsKLw1kvZm5halIpXA2gJMusD77DKgmCu2z/lx0dj67a+vzJ93Hx3siSC2Ix9vh/vufTFU3RYClblpyt+PfwDK/Wm5bclwdllANQ8AgM+qdNRDNSWaNDCNrp2+qNHxYPlGOKqrq9quKm7tCZsKvx1Vc41HKpx9qXf4uFDzn5VuSRwfkN7wo1HROIlvSzP3HI6pa6jfFJyrJnxH51Ob+3zs0f+/RMLuIr10L5yyfPeNBF3wn6IiFNBZtz0FhQHUkysCy0dIAN3q/V7umMUDZWiIhG4AsqbhzEYVchxcSZpRCTlT8KPCzC0TDuCTq0XjPaHH++7VZjtp7hHmmo3x3ZugN+jfwytLzDNrNQGQTD5vKbryqEa9YZceGQZuaSxoUP/Vk8bqE+209p4K7AxdKS2yjHRXPXuFIfvf5G3BLCVBP3fcRwtzVoz3pfqkamGugdegVgtQ=';const _IH='4c74085ca2a771b00423486f4f957b1830daf03ef4c61f2edc4c39d2a8e0d160';let _src;

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
