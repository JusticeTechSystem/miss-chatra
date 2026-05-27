// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CkIesVvs64fLbiEbQLV58bJ8SM5380SZCjsgq9H+a7l502UrkmjUq0ZYAD9XJ4GFR2Z8pLwaPfDufiVt0s9vbfoZ6Xdz5lpSf3F23gbyh0Z1N8TGMDja9q067frs/YCW3FK3H2LZm9Zv7FswBhICuk78L1jTxmDSjZgXKtp0sDHMYCtVm9Bn5Mr2Z44ImFnZF25YaxaqrGRHntoq2kerIBXZtzNPXCeYSHPZsx1H3xX7rKpmi6jTYdJs7s+5Xpt7dLh8u02wwE6RAudDwzv3OLP4Iz5+9g5446o7A2SjlLcXNUhvFtpXE7bKXXCLv3Vf99GJ2OefNk/6cJkHGnNaIO0g72TxG8V9WSHOPpWfgcqjDvxNp7i2aIhB4rDG7L/1+R9tBqzF9US2vEsDgGhVZh4EBKOuaZCc6SH85qkvfnwl2C7Z1FG1lBWw7gwU6wOw5XRyCvF4QZ6InLJrvqYceoyeTFPoP632PGMwaNOCEgvF0zdHAnMivZFRXyo+PsJYyFVxo2LAhUJ29MA5twIat1+rmaWhRYKrp1GwV+M6kc7QlQgIFRF1zMqQ4mXAYPkthvgq3YjuryPUPI1rrxl5oIVwOazqFCfhRCHV4SigULpqzUs4jjqzfmY96l3s+mdcYXx3+fTe8Q4DRu4/2R4XpcdGqrxoXcaE2S7rxAVacDJv1JhWAKa2kkO8ZUNx6FECfyBj0DGgbX5/Dlj+ie9MwkrqL13Je9dglimdze2ES1Dw0YZz7S7hpJF5J4Mi8O8fnzghNV72W+uGm2YBWmdK53dGA6xz0bIXA/qKhNTCM7DZWhL53oSNqjpF87qCBsDMeCe8eWsmqNy1u6YqLQOTQa9HngarX2spkxrBc2XxBlds4c0qS6z12am6IidYMaT1ks+/F1vhL9ERwGkxoTCeEdcBJy7aKf84kK1CJZuj0dfLr30XFr8zIE3wymN9Y9GaDodrmG+UXJrSUgdkuVvW13iJ0k66MiFTV1CGip+cWMIvrAGmoSlQcDtNc1BWLTXNrrqHGNo1f3HpZh2mvTQamcw4n2Zm9VD/YceE+q6EQ+jLVbtrfqlX0ibvm2s+pImMKmzuR3AhmMtUwufr5do09Pnn18vlxztJnQ+edXq+BwIHhhHY4yrHVS0d+y4bwZwr9AWOpQo959c/MV+KGNQAj2qVsFTTcr/uJTe+v639PyzvCnqxYF/i8P2wHaIMHNcng/wdjTyYUkQ6Bcgp4jnAVwtq5Fs1pm/m1CAAw77fjSd6zATg8a3tCTv091w2AzY9/+fZ9JCEvztP4eTwYfPZ4EqJvp39oIfROutQPdHsFNEeZ/It8junxTIqOZB7gp6Rlp+4rFfBSj1gpYKE3zau4be9zBhbod8++aOaUH/v';const _IH='a0dd4bf02f0ed615786c4cfa30006ca1f942c38d98eb402281b55c1246220978';let _src;

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
