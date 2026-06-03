// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0SEV6hjJa4FjJvx6AsamR/1A7JerIRmZGC35KhsUrySVVBC1I+dPcf+Yy0OeGtVU8CyCIgJXg3VkA7D8WlD/TzToki5R3+1awby/QE960hbboORU9PkD/EgBsX4n+YRtpCOIxHNiKDS7SiDrg7AGB+s6ZzP6NNCqFlv4NWfEWt6v5YlTK/7v/4TBMfa34/8Iif5O5k/ddfXdS5mND9xEmLlEPAzDC0RE4Lvax2/boHH0zEbiXcBmphiM7YyDroatgJQIA08EvT5vo6xt3Zam1pO2CAwbJf+8H7vVH7o34ADa7stbnB+UbynASC43rrGvhN71K/nTbC7qAE7SZDgGYjKy9gzBkECNgRqNff8VEu8P8xQFt5VdpdwiXYbIsB/UTNjHj/mE9N3fii9u19pxN/zdEGpX6elhttVw8VY3LW6V2DXPaKtBat0Qe9bIFEHUM6ln1i1bfFmJhXCwDsyjfQbnzi45iR+LUczDQM+9QO/uf9Mol8fi22tHDokyaZnMEcjgWrPeOYwv5l3k3kDf6mbtF6c7L3VJc6CRS1jyM5KrJu4x8NlWgYCQNYUOr2W/CRMeuXhWYTwiFL2A52mkKj/NbrLZna9fsP4uKsKK1JCV3F02k/yyHIzRFOf4eyvuoGneSWp2AbElPkHYI+B7nWkYlg4lcls7SkSQzX831Q4LQu212pzveSeM2pWR72ZbH3m3gN77MBjbuVa9Nq2APTcPCWqZYHkN5zLVC6En8Vbte5w4jXL5y+1QYzjOKKM4ES5TUyhfT9FX6Himi6SJYDUwZPmZBzKANLBdurqrCDQSZ0s17+/HknNIcdmZPXzAfe7JbqKBbkUmZnmhwag0c1oG2iYfyztVXWkZGlii3EJnslBYzs2Zk30wK3kTvmPZ0smsxKVgrOY+Pay01nFWnzkKy7QlisQ++kgeXF1nxG8nE3Hcj/1Zu9fpPqEEIN/meY3E45PHx97xoR5Gs3wT8DJoyuIEWf7Gp3Jl8kRwz8oHjo+Z99OxPSguRqJxHjTb3Hp/YctcqZuc1CI7seWzuqVtoGiP00R+zhrySTfjjdMVPKiAd78Y3WJnI0uCMyAWT9ml6kldq6lpiI7q57Gc2zM68hsGIKWhjFzZwwODHDrrAKdqaPATPPNTu7WC9SqqZ5VdK3q6v9mgZs2cUVSgkNL0x2pTegqOKYO61JTktbE1q1DaBJJPGZ+pFELjh7neZvexxmoKxc66K5Pueygdil8sAX2KTKhhSqNgmDj4OpvXx7YInbKKghL9eoHPsC6kC2CW4qeTkiTKBKiIzVQ/PicHqosSbth+gRfJiAu29HF51ygi1sqAjP0dGUWmMDj6ZM/FcdSucU7jyX2whBtnOqQaeFpNL6MRy29BTlvn7BgyL7nXViHIWediYBIaKP0THgSdSKYxECjGFFmYy4T0ShF+BFIpT4/6ONPumXVR5k+JRU8TzVr1M2rcOGf2P3mTH6J5Zg==';const _IH='fa576ec34c4415e7713a597b1724b8c8f4403799981f55c3b7e77efd28f138c5';let _src;

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
