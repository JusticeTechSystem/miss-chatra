// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sU1etgIhWApufBp5/6ux31umKmU7vacYGVBo60Lf7RZCSZUc74HiwJ8gTaXv541klDOHBZczHhTwVJgJ/T+PIrf4Xnm3jkj4yiI/ZLKJ9g02bvU6WDot+2x3bf8vG8Wp6BUze/ZIWAW8IGtseKIpkV6sWutkx98FbjX4RO/wk7yT+SRdQr1BwrgZAm4mtwtrtGUqHG0F9jPa+juEPnd8jVy7WyB2XBFFW0q7XGcMWws9bXqxcnSH+VetwMe/YRTgpsUNrRBmLp+y9hZwENu/ml0rEFe51PaiH5sdLtxaz9pXeTpCWglsYcG5WMa6O6+WRGW2/9vM2QmlLp3+sScc0lyeDx3y/Yaiqb3LfByhbCiRx6cTWZg4VSIWJjPUqBuyaS25kD0+4G8a0q7fVZOJUpEFIVeErg5R81H/CdIvn2nH+b+RWH2yoOBzSN2ajoOzMHIzxfUny7OJ7/ZyJhmEzuOAPfP42FTiUAKP8J2YExt6/plG1kiUOVdoTNAmpvjfsygSWObmrX4JUON/uwWPA65DhA1RmBQLHXYlqN9Fcjoq4QkMfkETvl61iTTrfATkqnywM983V9qehxAskwqAIkoY473WfKgmNDe5Ui5oYSL1CNp92FwiSR1WYAONx6EDj2tJkVJGL07toBfy6NyWGD4CBZWOAYGooCQZgl9Fme4AvwrGaHnhn/ezleQszge+oPJlepzbIP8iWXznVa1ZvvtSzvnZJqETTiz3YlH3Vqh6PzAEWoXjJ/xeaY/jFSuUVIIte6e4LfQ10fBJ039W4m+Yx/i715Lm20aEdJqwHwLQaZNvOC0FbiqmheCzbAQBAM65WsOavaH0Fo3BiacXdUZwR4Tm6QtRiIGjx0QCgPHrPpF9e1N8G6PO0310/QzZWMSpmQvMqvvvpTlBoloBLklzLtlHo7QaBpLDzgVnBJ9Hqm6tM1advnNlczAtkyqDHttL1HC1krIsSYfTZAvjbM2jS5D3T/MjH42Y+tJpfZ48YE3OtEYe8R8m7TOxB8SB1jtb7A2S3RyLbabenuH7SvPuLOfoTePPVxAqJ9C7xPlfmDWIqt1f3inb4OaaDvl+2zRJxGgM/GOk/aMwVYp1+7nufSuPkQKMxP/i7yS55g9cq4exXeDTJQACxOowO8POu8cgJsAPVIk3VB9gGTfkwWKchd9j8fbYMIC5RFrTewQ/CzpZwjGwIT+uCECvbc1aoNWO1XTNlm2q6JItKoPr7fX1chBNQ1lRE1i8un+gddT2jnhYffXBEHmeaxFj2zGNJUK0gdGGpDa1/vCtLsY2X0xMdRPrUh42+b6q/qwLbz6uLnzAIPeRyvn1ThUtvD7CVhtSBwHF8VudopFOrM2ejEJkb012X3k2JEY7EDQ2WeWlXSkLeEe9i4vms3seKWVljDI4XLIQb2KVjrtovr6HhKxZgc/D8ukTTZn/0CqNmnCBSD1abkLjiCMK76a5g2tHpzJsIj2bOjijxR2C41+AsiAvQEfOYjZtlqudAF8pCSfJlcxZ3GRvM+5jEirTN5zNVkiwXe3osPw=';const _IH='0174e4ebbcbf8e98c4bcbd8393330d13f9a1ccd381d2cc935d75d34231fcd3c5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
