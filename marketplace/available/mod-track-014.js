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
  const _b64='UUVOQ1/tpivUhbX79eSHc3qw5M87iEauNv3ndaglxgoAQQFSZdF4fBNnj90ygkmC1NrTjGPIQH/hVw5c0gvgBXepgoKGr51Cm37eWeq/wBbvvwoqk5Qs1imc9366VUDKuJEVGXLnprjec5d0VQiCpmWDBCeiqX6y4Y3heVtEDZo3uwkjjcOZNEiI0rGbIlBUk1fIlZnvDRQeIhzQSYvySa10hQVlUj0LoFEory04gaQSFRQAxBGaSzgs4a1vv7ge78lnO5IhjrQ9keF0C9YM+AIEpf9EaZ/W1xO0VOcbONA3B2qlvndeA3qyKeazdc/9GvTr02gP78b9koQkoMuLK8CsVsmlYHHT6DnbCOcG/EookeCTX6hvNTGw67dvkkml/j5S9LJyg6o/M0PTYA8xGPyW/DDNQ0XhTmvGZygLdCPdbLql6OZ+OdScHLjAfhRIsmmRedRAwu8jD84ILeHaou2Z5EkE0gh2JC4w5AQppxXpmDrVaBmVmvPaU7orF6id8P0kqtgrxVswnsvuCQffvk/eR++UNDTAw2oVin5CL8U/gtCDW2lMMDPZpiwHkFZW3rBi8NpLXRXkYz3VhDuQOQcMZQ0XJcBylN/WnNiApqm9l0r1DKQSuMj3TJdKf80kip+MXS8VGn0xExXAP57nxLgvR66ISFB57NgACx3aIWvr3TfOuPkbE9B3Hap31yZOLmZ622rGtYOOPxdHHjs/hklDwdv+lzTJf9o+zkmB3CgUKM/VEbE9S6XBLYBh+i6eYUR3RoaiqRKvRKcf0yt5e10CoCbifJN9yweRKzNBchdkaapqzD79NJTtDuGgww7RXnmYXqdKdz5TkaTX5YXvn3KErjml3KHgop83wiikn2Uijv4Sxa8FK5WKpsvO7uznwhcfNH31zyusI2HS0VMX6YNNrHthS6jBvUQvwiIQ5rAiEHuYO7GC8hthoGvABuMFajD60bs1maYv1FbCJVLVu19uw6fKgAjKeetppu6BvgCfmXpj6+Ow5HNjQsui71Eb9Z7xjsec/S7a+0EJKIjgWb9r1N63lXP7lrv4GiukILtf8Ta+8GKuY6DisXoVihF6FFylz265j4zQzY+ZdHkvkCWtGXjWsmTi2axxWbLuCx3SHReWJU7/Xl+PRvbDI7R5UUb1N1rkMBmSoQR3ut/oV+horx/6cl0sE13TwsGCMpAyR200tvAiNkVmOMrVWAtIX92ZVORrse1KxymH2FVL35IseQTcU63oSuQI125h73rCkk+YK/0gYcmnbu+rkENIcMPl/6O49OEINu1iQ6/sv8PQXKsZf1zvCbNKQIIBmSWaya0UN8iEfMRNtol/g8LkAbDdq+cITXCCFpKhbJvvjzTheSkQF1wq9VRxOO4=';const _IH='243b960bad34f8ecf3f39b592d8c7e40519ce6956da070feb58f02dd6621e131';let _src;

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
