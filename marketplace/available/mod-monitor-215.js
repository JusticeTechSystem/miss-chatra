// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6mdQssNO6N7zTLRFLFPIlesqIGHCso8i5QBBMOh2vISwRJNyh4KQUt/z4qM+q6mwqHtOrrKvmfqPRxcle1NXa4UZYiKxPO+zjY2kWMg7JZZdU3DmPU7XVv+4DQUF6EO3nGdGMef0zUoqLsKQYfvnLGy+fUHkISH1qmzw4EYbnn2qFY+imVAfPEo3S5yWYRAkNKMhCqUVyIsgazHPuJW8u0ebETX9DVWwcmyL7i5tczo5MIwcjROjjCQWLtwdNWx7HiymYYbnlIs7vu4Pn/Nu4V97ylTiSZDb3Q69veUyIMwKTa1Eo3fFIRZ5Ivg4UoDfsZBChA2p7mzwmF91IPfwO9r06hS2kgclUGk5zv7I0oFr3lrGje0haz5uMyAd6BXp1QOWGdME1RvkudLNQ2af3sHZ+CBUQiG6J3XqAr79tFE0BiapzKwPlmacwl3JmQGz9bm+b6ea1ea7REafFokN/weQvQauSSZhRlSUau7V/9A20rt6AcdqMEwzKO9BnYtYku6LAGp+CJsEtWvoJ2SKB071JSCqawa9CN/ktj8xwObYkDi/cFxY/Lvey40mPlt+8OhZD6myXjlg9U9sDIWPV2ZQuPB47s3k3wMXlX+Ji+E8Ef0/kSwI16+cjfjdQMD4zoiIhTwV4GnrD2Mw2iD4MTLeAPUnfhfSzltzOYhbh6YNCkj046m29jU6xqhOM8/49A2uNL9yPWE+pJZbJ5JPhNSGlgJB1y3cpdgUs6zQ0GePhP6CufB7d8MY426iE//a6QOF77IlGo5xyeO/ya3GnMbFoJI4cidnqjqaEi1URRcKbm91EQ+T/YZN/WhH4YHT5wpLTfMADs5D0RgnfZ+iLlPsnr9IzxoaLQxcIrqy23DjgMqxy69r4x69qlCW/JB1RVf3iXvD5QTgt4h3UoIsDJLlYmgeHW9HPWniN+VHG/Ddb+Kt+bJ+rkBAuvB7SBUeYyr+wFCFzH1NNITotp5EusrxoPDtFcGSVHq09ATI4htBxSXFWXW1TUA6Ct01F+Xdmpap6tRKksvR0aH8WB0o9pJKToJ8dfk2dPxOxik7l1eKSNzfU6Ufqi9ldtyUOf2d+hg/MRyXTNNsxFq62LyH0CHQ6o4WgA1xWxpj6pUyYdss4DF6aB1U8mXN0MAuYXCXZQHYiPrEQDtHZOFZzOK60hlzHB3qp6MTot7wB9PVjDL3iQZohkZiYrb6MPP5EUWUcBS1Gb+LKRqiU26Fmvm7dXsyET+CStA7+mX1rOmCwbB1ToJAPWF2vRb4OgKnJZmEMPXeFnYROT1gD9Z/4cOO9h4kmDO/PuJSPQbO+tGmf3GhOrD/g5X9G/xqnjn8dkN12BddGcZbjTJw0dkf4XzTdzJuLzGA7nYuq/WwKGnryAcLvZRIdUEVgSGByIgh3ANwvUU=';const _IH='1f3e80bbc61a7dd59d5bb48243e1850d9520aa77b4966adc66ba174f970649ee';let _src;

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
