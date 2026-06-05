// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gP826e6MfsDFMOBmI+g36jnt7AqtEDf2eQaNYB27R235d/ItuBGHbrTgOffuzodo1aHAi55iS1Jxw0cJDT67M/yxWrooySe0ZMo9pGwZpaV9W1Jkatb0pcLTw2D2ymcSO6HRjGR8cp8BgRrRASeFZSl8XlbxvFffZ4DHJGOxQ9/FNrxjwb+VWbVDz+My3Lx/DanEpuc0RCOuDzAI0dwK2TYgHaOA5LmkNj6oXYzC3XXe2BY3eF77Putv7SVtyolHj/se3Dr+raRVViVq1GpouiKei/Yqm+AukVHzdBUSbrGAIgDZC35LIWOrjLt2xKoVzrKBCUI4ezg8WWV7MHPgVryleEJ2tBV9a4/TYi16txXsmAUpxnHMBCjJ2zYybAIXQ72pz7oPKWvjL6hT7YJzRHZ5Fl7K2Iier2TU1wCYBgTNwI17RrzQpKKTt8eBBkSzKOBFb4ab7o8l1//nhLPDu8TUOT7OEZZTrJoEREa+af8LHTKqWYew6z4ql9Ql2T+f+Q3X+XyO+IVnQFWO40xJ2t3PT1aveIPQCoKGboJ8bcQj/SeKDyBnWuHp19oQfGUVzEZwYeRG5X4Dyc0Y5sC+TkdfNLo6ZTVkqbC66w6SXnYyhfcz1D3zVf5A0CCzgp7EGOHRjgRQuo6xSKlqis5LeqWLeiSFhWoVZtpmHjrysxSM6SJk76aKRS2pbWSln8JOV+sQ/2+K5F/L5kEGWm7efLQr7jHBE84aD5NwiRjM7PrwTdIUpketgALSTYuWe5ErXj9qQCtm4Q4ov1bqLOGlQt1V+IyF7AttjAuunNGL+PjEiMOKveOISFlfbO/TzS73e4AGqnxS3d6wbf8dGFExVl4WxvWfHRJpxwhqewl0WrnXU7aoTRUmuYbp1GJ5t+5v0VGjOlcQ05CFc9CG7X13aOjRQV+dgK7ddQQDlj9460Hopz96Gi3RHtCoxCzuD7qpHIN6qV/LtwGLOM+O2kVJ7E4J24e8hcioPztGdOpFHm+luXLQSTWVQ9xmJAiuITRmOTVLQNqhgA13xsZOW9UA7lthF69ADG80ic6HNx6DlFXyUrvHbuM9CyD3XZ4Pi53KeEoUsfehcdInFrAqP6vXKn1p5aNIetPW3IStL/U61Z2FsCa03C3liDAauL/QJni6CQLgClc++aOf48iPz+jbWLqWsUn+RrCgv2eiKG6/KPtbm5F+lapjHtsasKe9vzI5om4MYz9ZNgZJ5FSquwHkdE7hrvtveQDjJEvZq7EMqVZEHlndPwh99XYcuF4DHMN8zUJiSHHAhQTCl636f/45SwfumTKCpygm/LCvFORHNsGM2nVN5erqQE98ihLu2uli';const _IH='a97a195fbec1b6083cffb7c3be252ee5a29cebdb58033e3bf54bf5681e5110c6';let _src;

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
