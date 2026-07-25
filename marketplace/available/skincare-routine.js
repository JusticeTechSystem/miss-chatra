// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAN36N7pRKgcYenodYRFJ5VAw+JQvOdrMjqKRjsCZasid1AhlmvlAx8YUvs0zDIlCOa88L36luFx6HJOxVqQtXXIHEt6Gx/JQq+TuY1N2CzG/r9EN9Mkl62erkYXpIaZx+NRdidhpub4/Bip43qTU/EgrIPVDu0WHO3uFIGi02In3VulaG8s4dYsI1P7WrBm3kTVnC/PIkHIIy0nXkvwlBm2G+CS5pZolw3wyJbDLd2zmIeh0Spe3zDO7/dukhecubXwAjT3ziyLnxkwupXRgk4aU1DZbJqm2igG6XQxO3Ze+ZnzPscjPquJmRHSOTeCEsyB92Yyq+iGiQv9zI20ikA9/qwlMYFKFsn4oTCBe98SNXtIvh/wa3OIfd6OXhcp29s7VpI9lgyG7ydYPd0Tn+5J2EB3NqUeHouWEfs2DWS1BQ7RO9J7MSiqiwtUM/SyRfzpYMbs/fPE4BLTDsoOrMQOkdFEWDHxxtwmGP16XJEUgXMLwSLRint8yz8VD0Dc1volB5OMTNZIy6xronGI/3hjoT4bXsjfeFw/AitRzD5pvTRc8zigxsvSofb/fizZNoCS950ZY5Da5h/5kbymd95aKARV6LGPp3XhLO98QruX6/Oc1s8Xa0P5S4erQq9p9fGShr8+w1ZqfFpVfHYOr9bMO5CkxpjfVf7hOJFLwS0IBIizVbaI+VagGCPoqrgrcS9kf9hgcANGWGtfp6VzKJ/Q5TfBYrScuD2v+wqdEiwoqwqgsr3w9pZDT70pu9yRhllQCqEljqdSMaP6dLqesdYSfkT5Df6FyWwFIqO3uwm5BPNL5L3PdFXyZqpMt4oPfIyS8AaBOejtgSL1aeQBuCA3s8cIUbFIY5DuiPfFf9414Dl2V4BWUMWvRIATrfVNiQ31EGoL6C0H0v/WOPehMnnAW/nwMLquF+9rhRUdtAOiYx5BAg06oKPJ5bLSfILz8q4WNRlLLPhlKIEtrgnIJISYkucea+JpeaSaxFjyLOsKBzsymQ14OYtQGx32evcZazAf/GoFrOtHLvsDeEf9+NSkX4BbIrkhE0zFWBwaUvEkDtcttGVsc8XaHNBAZ1tQgH+fTskioNPeP0hlQCew6e1x39VHQyk8i8ghO6XyfrkzF5WfaBXPmJIDOyhIqvb/Uy3EmAef+adiOyPaOaeXqermcwovPCkCJsMofuYfIxP95kSqFHT1GP6OuTbjcH7FMt6Gttjb0h+PIqltAjQB7Ag/cbGl9fkECPmMWf79m0BUIM03unx2HUQU/9LT0Y/ev14Yud79rhONaFWuqbs203hBEOz9nIvNltKTcV/CAHtS6uO7meFvt0pqPHRk/XoY1nIGCYmY3iAMdi/gSS4YlYZbuXyMvBpP0qDYMCdByegFmwV7O4QObdywvwB4V/5AP+nom+xI5P//HklU5AxRytq5MjScssU2i/YS2AmQ7TGQFCZHzorHvmHSErT+RuDyvvxp65etFu+EhLDdXGehs9l8HFRxBOuLWL7Vy906BQ427tl4z1XZZCE+uGSIxkvLWwpiMcYdBmGG3zXfEAOLdVdu+RQlTQozIpXE+ShkN8aygTV+4K4CPIz8TaDYqKqfDVdDZgfnML0NTT89hkCAf1uV6IY5Ke56ghrlm6ef2pruI1PqIjKtCym11myorM4BHT2h138JrUT70IwY6hKbWvB63amZkLOIFC';const _IH='3b7c84fbe5d58b23424843704724c2c3718ba6d58ad38b2657638fa96a055eaf';let _src;

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
