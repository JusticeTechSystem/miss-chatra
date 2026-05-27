// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wee9lty0Eeq7xsjs91pjznqCBTRoS/pWROdKpvbdxFUykbouw0sWVUyvefwucaUqTXHtqVwaGuck+dzKYqH4Z4OhhajZ7nIAtfLeBGF5BNudEVde1MzdxfLssZ3P2q5Wqvcl1BqrQqJHqUJwlu321dUPctjog7tzcAkdB5LiGmwYM72k+KL5Qt0R8BxE9k6vivokONVJi+iKjcgQcqdFJfmIB5sw/g5c9hnBn87kfMuiV4Z1KZ660dOjM40QtXLm4SK0CV218GT36e/8bhxgGvCs3bubr1YmySM5r7jyODjj9/KNvcyP8silH8fX2pn37TSpweUjBhcLfdrSfyl90kkoim8eMJGWlkk7KyD8+qrulZ9COBt0N8ut2dZzGgF1kstk5VJDYiWBMEqVAsaNcH6JmAwOidlT8WV8EA1NOW7doqVFhDylBmj7+K/jec18rB1PjdbcRCn28VAlFupEINM3Qc8h+k1kQHDgqGVxG17JRAfxkP3xehJ8dWxkq3g/0njVo2H/Va0IHHdxf5jbb8L5Fk+YlYMA4hjm908iVc5klN3nszNNW2xuIQLhmys9RnAKwkGG7SEHNRA7uFSNntsR0O7xKf9KgBVkM4odHTyQAJgEmQc65802fBwxn6bDowOPK7y2twdH6rHLNQKCYutl6DE9xY3AYOEdswgQuOoX8coF/Ilqrit4BPg1g/CSwgrANwhw132o+i5dZbM+A+E7SyfDp7+HmFw7oOtC/PC1GkA9hwvA+knSyxBV45S0qx2rmsIfoirQGYN44BOR1W5jE1Z0VML+HYW+sTqTn4ZvjNM7y6dGG3jburxnVEBzl/vPB3JDcnWW3x579vPPGNGMGD1RMEkDOUKXAcR6z9Jsi1ZMswxYM9IrUUW0QIRTdmVSf7axlnnUUzeQoJNecKVzGmZOrxxTjNngzqkINpmkHlcBVq3K7lW1g8H5CQMNkAJWvzI28VxfH7Nm7m7mrpKiSfifJX5LTwABfp3tCsw6fFHyUaNDh9nc2qa1tng6AXoyWJLDL8bUKSi1UJUkcpbmCRX5zftj4zKELvzKHqkP0R7sGxxC/tIPfEaEAgOFzwqb5o+IgAO8lpMkCIR4EKZaJsQHwtkylOWLYqXilxmsuocuWKW5ECvqfJkzAcXSe9jZ7UskEtKHUtt9G1qFn/7JkyzlbX6ipaCdcuJfv86XSt+lNbVt9RQsKLwYqoY5K7aFCbM6OVXT+4c7PVLWxAo/WQvfDCXeK1x7EZRp7ggLjpTYVl5oxR+7IroLu6kuYz6GIYgzqm/ygV0xP7GjotTqDY9wZCICnBAzFAFvMBw7g3FWX9KH0W1CTMlC2VYWOJTA1lry8vRJB+7I0zi92dEiT5l7Num8hw==';const _IH='87b6aadffa1c9b101ff0515dd283abbc14992ec1f7b8243cf3a8e0ee959a5db6';let _src;

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
