// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qoXJ4H3IWzfpRhxuXL+wlAdD0TWeU45i6SL81GJLCwstWsJ/9VHsp6qX0H6F5h5wItluwMTchbYYzNyNqfdBPmBF8pbhCutHntQZYEb6/m5SIqQxzNwpQHIf8siOGAjPmLk4u336ADqsRYzSbf78jegbQkpMIuipztdqxTn1JLRZCoOSgFFSTJdippxGFL8eK8DkJq0j7i31surzOuhGk8RJYhny9OKjUzMe+In9mO2U9cNl0h/l+SqMK07BBa+R4bSs6vE+tHmtcG+BLKKLb86LAQlhX7Upt9PMTgmejgwh5KsOvbZMHwLqV3Uqe3MXeeaimAlsRovihOQMLjWF7X7a01QH85wKQxmZwCFDZwdEQh14x9Rh5zq/vaz57SjOtBQNkQNO6/Km1miuxfrI9mL9hhTE6KCNRWSYrBfmNSpEg+nOg0jW1trU54hiOOiHyLG7RJVbnYIKjtIvsCrnhK9BE97DIBCi8aAgKr5ts7m3ugODo91scAPMd+BJg6rKiZ8IaI2vbuoWARq2OWAdEB/RNi4W/h2wctunVKONUbwoEKJjnrkHQ07wzOWZTMNR7KBq5VMrjg3FhoLH78H9Mq7aiDMmNY0YhZT8h2ksJgX4F3sg33VktHcTgw0HIHzMM2vlBlmePh1kD8syeiJDdd64CCZUo0QtEZXrDJmO9x6RuJNmgpRb1jBDIc7SeP3Ex+4vb1FmdUkhy54WY3qMqP0DFmYB8mN5Luy66HnWqkJjyPi+mH2dsgxOsesmeyy1KtLCJoAWDN9G2nbtpAh6+CKQLHv9SaVQFnazNMr+a4afDNBaeXUXVEzdt5aH5OcO1QLhYrCquOKM3z7dmv6TFvum4VyutFekJqm46zifOveXCyhadVqU+dW+8AqfC8SiwN/1pn6LB1RSkmozVXw1rFTA8AqWxvO88dme7iXeu2qpfZfVQZpcXeurth0tZ2WkzhETOk6vM/+cgrGmHBhhUkfozymyHZoTP2VLwxlACeBN5Id0IFb0Y3v3SDxsh1Zy4wzIW0SgpsDKw8NMs/LBeXm0cQubMHqF/OrjXH/QGV5hJVqA+cNosEQdm18Ky1QIK9bvvmuY8et/WVLhMiSedPj3iZ1jN4rvYU8HKvArI0BkQAIcI0M4EXurPRk5KWA0vRuv8EE3aLQgb4rHW5/XmX7uyIFzdSqqVAffoF7IpTsh+chHMy/uYBWh/PYeI1TZ3E6MvUQZqHp17KtcmhVZM9l+lN2G/pa76o6rdYyzSGS4M4YvRxbsmySY5TExsyLGlziB+hbinDPq7Xmg1Xc73UtLgzYEumtQPhu+Xm6+iPq8RDl6p4sefK9mtA8ptEHHeLa/6QNAeQK0g+V+hIQfJgfPF1djZi/gaDYPe3y3HUJU9IY=';const _IH='c6f681c66f8cd63180db5a7318e493e0010f2ef8841741765f835f534f7e160a';let _src;

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
