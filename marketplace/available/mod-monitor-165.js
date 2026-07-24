// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgB4sA5fs6cA/qRcVaw5Ul+D7xve70TerZWWcFTQxTWrsxyHKZmSaYT56NaoNNU/yvO3z99k/PKN9ZY4nBK5ufq2VRF30cn8PienoAKo5PUI9A6CMWl0uQ+7DCs/VYE4tS2c7sUslk8aBb3yv4cFuz6O+B1VxV/nCqX/wxh2lHciH07BxkydQPX+cHHOhy8zT4VtVYkqH+KY8+Xc6iqdX83TE/BcpoCEsy9aKjgrZrj/dk22ZA9ysAMy2lAFvUMgARgI/77JGXwnwvyKnqzsh8SMLiW8HUgdMF0PmDrceUMXqoqywrdLGABZFu3F2Lkx4X2HYLNyJ/NaY3WNwBKHnTPE5hie5BrQkmcHnw6KBZZB8NaNa5dje9h7Yv8an5hyHpzuqXllHePPTRPlcsWZc1DBhnQw654Bzo2oA3j+7xS8QnKF5zmHrM8rPsJhSi4CiLW/5+WKf2x+R9mRs+FoCoPDk/LE028RxeoSWdob35slVgtp1XhPjZDTC0SG+wH6XNqCmlVLmjaTM5+yrcUCTFFYT2xOT8UsQe0SxndUddN8YJ3h2kzN9oITLU41/dAFR6HtWfgFb9b4GPrUSt1Q8Dea0AUnBfl819jws0Dkcvh+srlsUPdTfAawQ1jBjWnpQpugy2DjpMWBFGVBhyg1sonIQhap/1uGZcG8R/k4T+gUrDKoOfHVoR5f1nUvk49tJC8q64290f2ZvVKualWxeTHHmL0wjAStlc+wwyqu6ThhLyoVU5sIoM1/ykulttV5udtVQHKrLMv3gr9r6UQ0975SBiJQcGuXKGQB60NX9FB72t8gl9e3GbnZ1+178bQX5V+NPxda/7bhoEVr0Hf0yhxmjcW8glcngyww1+7n84zWVQQOWafF6/J0ThN6RF2bu5AvMkrj5MBTIeICfLypfIVic4KsNlKA2p7QuYk7xrDoEkEEFUKvAAeVsv8S+mYVR8wX9xZCEt4n77A6xwF4qs3wpMBJ5jV/7PeDDQJ3kQ2ha5IQc76SEwooGqp7d0XBRA4PnmbaFxxHVuFHdQ41ihdT4S/oQxIYsLlLN+Ie5rTuNZkfZJuOc30WhFw51TkSfNez6rudW9ZttXu43Nf7nNEBYoz6efslo60sAE9ifhfr/FITHqn1q13w9JpER1i84j+kRdXEwgiN2tdT3BHu+FU1llNXcljLTfX8GMzEUszDe1Jeuuq+ATgBNDrOi1l6Ipq6VqhGUR0Kk6GFFh3pSiEP+7KRLcfmwQq3cwMoERctBc2AiIhZjFofseZLbVqcHZtQj2CV/vxyGNmgaTBtWLavJ7u1f7SbgNgR+GjaX9aPbMuWdhRUvmI2beXHwnWDl2N8nOoe6PR7DRe2jbIeYzhTbQ2+vsyqo8zPkpYVPEurnXNwNWMYumQZs6kCGvUA5n3w==';const _IH='d2df1d49d582b107b31a77baa47d824d622947fbc1517d0bcabd952e2608bcd2';let _src;

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
