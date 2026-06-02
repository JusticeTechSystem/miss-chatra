// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LJhMbXJDps267u27w7TcgUFB6b4BM3m2nRRsoJm+nt7+lBbYCCZ0v6pQrJTWxwCdjahWXOMOraO8q9iuFROVwyIaEXbHyrp3915Crecv4mf2DhHBejWAECwDwjt/sNgMGcZNojO6UNBEQ+Ahl3QW6ObQxjalw/6wxOx76HKhzcWqGiDUWcb1DH2XAaRJFWaJwErSmiv3/Wm44k+gkNpWIIYKXR6RUZiMhmB8/Cnxv8KOiu3Xmr/sx+IHr7+Gzkp3N3rantDDTi16N1A1hM4JhfgJk+DoIPQK1EMhSuQKn+GroQS87+L0d7wjFB6Zt4Qn3KJuvqJrJf2n5RmD51HRCNs5or2jVrnOuOCdI6j/yZkiTkJ+Ag6oys4/vlCGo46+nfssWkv8q3ZsMN6mkmP2vnU0HoMOM6MkHHmfkJfPw8ihCTKqWsMHDRZ/zxeUZWSfgZX6fMR7B99PlwCPePoTCEuXtumZ33AqWrWGV99zjO8i7yhgIU5KALnepr4hU+fNNJpODT7u1facf16RtIhwd7Pn6kisA8/ymNYf2lYXY6vpop31ZYouS6xWX5ALtszYNVhmXzF9rxiYm6Z0ANE69ZR/g1F0olLibrPuvWgkWW0NGeqwW7eXIGadQRdegaUYSMZ59phGXSubf6YenK/b/msWxP096Lpwlobcf8ILSfvA8/vnhEqwMcyOvSqCONqF/Gu4LZcuztPiSt2wb3S5F9wdutUu03P5sZMLJH4L7eooQrHj0bDNgVC6z/ehTv+TZOPZ5kIYb0BTiySc+ML5Hn6Xf9lNsEV0TBA+4N8ignxHE0avwnABb3HUI+TLl3qcbk6DyL09tokCmnBUIIqKxZFiRFmVz1b6K7MNpAuRimjhXO7AcEktfHAaYfcObAyV+7k24FX/namTzS/Z+oakTg1WTGjQ53xtUClT2G4JnQByDZWMrskt4p9RPXbcM7xf5kG+zEwH9051tRfiwm25OQ3lyfFC4YxNd8YvRQMg39vA1IM3Lag1xZBfMMZEXsvHA5JJot4MQzH2XIL3y0uXMAetFU6NWw==';const _IH='ed4c7a8f9b88ce0720e1c1d086735d534918214fe12b4f9cae9d9fb5e408c47c';let _src;

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
