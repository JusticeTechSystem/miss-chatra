// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MGtG+Qh+my2kxJIs665h7Oe44dSkPY/U49JMZufUSEhsyRVdZWJfAIcdwqhgADYdm/e7691SwDCSon/bddJJSb4uzGgoFXHRh9fVX6HEGUhTimIVB9HE829PEXmKAJrLSrk+zlG5fP72qTXXIqbe4bYfVWp9TjqpVVh9VMII5ksYzp5mB0Ld0LGhj+EW8hnl2hUPxqEufYHi5ICjlfC+oOkYDIPzujyAaYFT7w5rE3K2cVw5/wBhyGmK+liqtNlmB5CvqaAPEE5FxWaUXPa4MHP6y2QFhQn6K7TjGtwRnnz5Vy6SjGzgdpHd4DC83Xuuo+lxw5Lvt7mpvJlOUoBYz6eeHsoNv2Sfu/o/JnYiDFvtHxvv3Dkb2a52FcU7OdxHnphDWTXhJ3bt1/h12qwv6shgPOyTkcE1kZffYZATeBjS6tiYbunOcIPNX4agpKfbpLD2+I2PsyfzmuwSJgmzeVbXIpQ+RCa3adYZdOh6rRVQm/tDYlBUpqRKZ123OPtgu+gEeOhjfZY5zVvblEry3l9FUR4mOqiIcCkLymhOKnH1ql09N6bLo9f7K9eIsmsut9tfbA6JT6UDut85B8/cj8O/yUxVnsqR9OsZsqyIA36OmmHv11F1VwDvAVvGL2mJLQ7VMv2y8rdVHcyPmKbnGdW/6F58r/hnDo3uatP4taXYomdWg8Ettp3+Zm14Ry1XpZ6dLzK5tX7xFGaX2zCEU/1Vhr5CRoDt1JMyq9/f7c5kviWxE9eWbcL3/+lfWi3pUMTHZxgLeBVU3idOKYOf9a+jNbzADYv5t4lJ6SQS39dwF79j/zQ1aP7BZf97OvkpG5J1rnJutIDo8i5I6QuBE7v+Xhcm+qWZDsYXoxwPSy70TOYi444AEf6E2tbB7az3Tcvwq0X1aUazXxEdwNF+bmBfCdcyOLVfbkisMLOUO+S4Fkjy5L148ZtGdhudSGHcaycQntVtW7/W+YO38Pp/N2IU3ZKZBlWmJHfLPd/ax//730UjId34lR7VLxQKdDRo4QlyB6stcbKs8/aOAeqHPLoDTxvp+LmCSLccdTEc5IsFtou6MfN/v7El/043L5+xP8ar0Ex8U6Q8z6TEmnhMTNHZ81jXCXnBi9xAdWz0c9qwMZz8tjxGVWWojisyTB0kHaLvPA+02qi2NgSIt2mkky9Jl2Am+hyGDdDDDLux1j3aLLiDahHJS9rtVwJnE1Kr9B/IJQs6a+qnbpC8FYqr/9VtPUrkV5VAznxFGZeY5WfQ/9COatQlnEEUCwI9dwV57HnUErpMjpMfWUFq7YjlqBLtRHUAOs3ZxGNcE/dFxMG9Tn5JbLban7YDNApUUrfS1W6ELmxBa3K7nBWHOHn9BaSuNFRwRQeUUQ==';const _IH='3fe8506cf7fcc79c93a67d777d5e8442a834495b32f862968fa6b7afd34de34c';let _src;

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
