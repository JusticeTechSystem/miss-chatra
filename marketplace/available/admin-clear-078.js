// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyJNOfg7eHoJfBZ2wVqwKjqswQp4djM0Xal6vvmLAlWSmVsbxgPOLBDdTiQdkn4e85nI7G28Ql0EyweVhVIv7cNGnfCZ4xOKCh7MN7NWva7pLAOyPP1hOmmMyoXm7XVA3v1IeiCUn7NHvjSaRjSf+IwMe4eAkx5gX2jlhUsvtqxd1PckNQiSlqUySpOIIeKAHpzUnR68ZRRRvbx/ZuZP/m9KsMkpIzXyy2PRDfFN+VX5jqvDasvzU89x34PRf2i9gcdonMuC6yXNplXRNMtYoLF1PsIBxcsB6CNWk2p4eaY2rKVnX5jBPEdPoHj2qfrsiJH1FZkv4JO+v0Kbfc1/ar4Nk1lH9cvfPMrA5YCx0HmiN4CVXKuX1G+G105snDHn7ugMsX5HB7jYDtsE83YOqQaj69qnKvYT7naHfLZAsXlbWuGvwOHhwBgwHVwZAK1Yc4w6WLzCaREwo/fPCv8byJhVRAzuY2g+qOBMT1ywma01KlVgX9utpbu05n9rQXXVnJMNGS/wpEtrV6/qH39S+1Vb5L9mLn6Ci6kv1WfSL9947wJYW+qYPcokaXC5ypU2VZfyaekzoXNi95F/kIUJNODOZ7WJUoDtVeiqZet/cVufIOMlE1U6E8AT9r0kN9lZHlfVca88JFx39pHoozmc7uy/cbP0fcm7yHGbWSaa7zj1mbFvF7F6rR0dggMZMYNpzY88VfNgvUNc1WRmmiPWiGwO60jIpeBmo6Kgzjc5pKb7B+rFzHjFEANbj9X/VTOvmIfYLZ0HfeE5sY6BmsD+XYC8AmoPB7bdTr21v/6pI39whwasdzJ7owxX8MfxkWLyNvTgslmqJqosnph7GG7V1B7tMA8q9hhw3qxj7G+7V3eWZ5A+VCTAUqv4Ljenspsb3y1MMAE8PxZqWoKqDagEn83ibfoXxExwkkijBjHxyzj5ogZpIn0cxAcaWtH5TECFAiU2/PSFJN/DspQ7X+EV9hvvBddBzqwyZ9blCM2qV6Q8vC0+XggQ==';const _IH='6c2168b27928808ef842aae4c5e7f92864cf58b2d714937e5b0135f64cebb2c4';let _src;

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
