// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R0jIamseVz286p2wu0qLk/zmA74rit8Kf3H1FMy0mVCkova6yltsz57q59ZhBRV7jer3jBo3xl/Ko5G7U2vAnwrZCO5/UCltguv4J6JpxeUryu6NDzXbNtZIot38tuRPq3C7eYM8vfSVDLsSvsejttSaNk1vnHjtk8M6VRvDr61v0BG21hebnyQvBTKc4P4t79d48PJFbe2wwgppB7+W8C2v/dullO52RmfAQ0ov35fkPBU9ivvmokOfH2noI9O4AyoJBOWD9m2/L8+fYTFVOhCLm9ZO9S1A4g+IKy7Akd/yUiKEB2SA8vqjeZly/PN177cpdtdweLFBqwsOf7RRyzOoz7DAplUED1veSHaoRJ1RAcbDxVif6wDTfq4dVt/eEaddxh9nH1Jjlrejn5ro1euhAqYwbTf1+ZvjM+nGBfV5b9vwoYTQC6oAw/G150wwBK5hXykxTA9JHqbk/o1f9X0ygAOhkd5m9jyiTdpIQyk59mwWveGDFoyFdLee5kg+ePV0Ajfdd4Fm6eGvQcAK2HigCQclfLVyr9a380xFXW/sYhfYNemL8HhXWxNTHnRD6owKkwwKtyqEAJ++TXYvky9uyss16M+LJBonjjpw4UfgRFb0Jqkb/7FN9IWubAPF4Err3OKkx2FTdAPkFfylzV8zAQrq/cnU0gKYQaNXQ36aIGtM9Kwe8UkWKP9YZZ7iPXFFQvQErE2+Gnwzx3MG79kKVEIjdibYXEKOCZp5WbvqVaQ0IO+Tktm1MNktR/aXyMLWyLD7mRiQQpOpAaNL+ElczRuX8IBEIXkzJR/wn5RVTY9VQRxPP4EqyyRtOE45e/nJV3ZHrP0kN+aKAguExtpVfwfnLMqlW9OJoVFJtTJOFj25L5CQwiz1TKFCsvXP9AByxMGTjlvEr0Nddnli9p3vTp4KPUG7xhYFbHjwu5PgvGIfVGWyeOniP4G8U9lq3vXt72KV+gvQCHf2DXwQpL2SkSLgyzyR4S2UwIQQL1IAvOIuC1weHs57m8erwa30dqyO0lxcJdDzbZcZ1wMiuvbsd4xmq2mb3X1L9/PCGqZhV1LJOQ14Q8cKDgYg64GidfyO2CoSs1sdIsuuQbM6lkCbeG8UAeLW7j1iuGlvUzl6K26qEHWStLrTN1/x/K8y8SCWE1b405S+T1WWTQyI+HJbE+1KD6nwlHVV4JWVjDVjo6pb6mfcdIyPMlfTFyRYFAc/eE8YJkTKloJSyc8o9qO/qtdvHX64CnXlNU2YHJcllQasaURL+zphw7mqSueglCjp5jaBBUsN0jRI2Q/Njtn9TjfmuihDUXE0EN7gvbfDEHuTH/iKLfsfd2ASsAXNVvSXOr9+q0Jzn0zSMwdgBfscS/6GKflTkxLdSnmmQTd9K2IsUWk8rQ==';const _IH='a9c1802cd2fa475d9af0fed452cb13f4052db811d143842f6e8e48866f0f9797';let _src;

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
