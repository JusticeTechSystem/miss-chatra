// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWG0VKHV1VqyzSK1WoiidPa6rfuNpakqNaLsCF/YBm2XihxJkoaJj5ymp/9UK9OcRj90Dr4lXMxkO8LnYNDbyy8LpB7galxgi5T/sNaazYcjtB9W+pyS6OlRLj+VYCwCkNWnER6cdQsdLmDNMijO6F/CQJcJnPhXuD/vMDQht7rPfbNMPafJebSU//nGRllwRv1Zw4urwOUfLYzbBpcToCPDzjq6XpBkGGXD0mS/lx/f8SKZ/SYD6LW4paFaGFlKXN4GWC4jU6yLX+vEHk2c+tfS1lr0K2NHz8S1p7Le81aNVkncsYfumoungrEeWNbT8ZF12JBqt01O2GfNlQmlrZ1G/pOT7QXjZ0jM/knM/V9aP7SUpzoJX/YxmNqN2T5CwVGG4DOoOrWdRm7c7+/v09oNimIgNm6J41t7XjUrjt1fz2xVYSYCZG/59dlM8DPBoVieRQUwX33q08KG7xc+nZL2QIdb7dL54m6ow/CqNWeAUhJb7N5mDhcBkec09ZLNlVSX2/6MB9NXKoxJ1Tlh0gqHnJMbHpxi1J2MB+FBZuEVC74GOFoNSlRb5nRuS+n8c//4PGpZh6X03p2MDyGv7awfz0Wks///1k0d2CLDMWXoU1Mja8A6sCmpLrm+LVItBtjEPLTb/9Up79GGm3+hqSRg2Kn7gvwKxdpy5AU45i3fpKVrIOR5JKpeLlRsuP00V7gH/fTdxf4zZvk1ZAv7sSg90ZPvzNmMituJAEOMewQ5pf0QM/xQrw9+oGmLNbPs6CSC4/uI1jWhsRmrzdxgjAPnB7UZNTFKWuXBirqzFf/ys/tB0GSzuXp0rQZlm8wY9uwkfwjhGzytffMrHpAx0BWiickSxwGWAgsQKPLwsEX1UjLky+hE025/tfYNbX5+3Wd4pEGHMwDeW9+pTXcoGynFS4xw3JhPPZuncWKBiiQZRkueDKH8EKNdUNIMAdz7MzJOShPeGLsyDBHQ8b4kHi+5AKYIoj4en1XIgmfqiGh2ZhC+0AzcvHO2NjoKvWGdJLbMxOjU8QuT7aiGeIXIetcOO2yVZrieo/bwcIy/mnzwwNINZWOinwQUFo3Ub4dhhSdtoWpseyoZmR3tvcNpbHd6YDQHv822blh5Hq4PFP2VrFSeyUDuyseWU+B1HVqTadnafGeUWvZQmWEteyla82Vm1wUhCGV+dEMTPbyDOkfS8g+mMChLdWD22R3DEGE94XYyXXJ//x9ml2c+ormy/mE6BT85UdS56qMwwTK9WvNCoK4U52SbFZWD1Ni/6VSG5bNuQMJnGvKLybwn44bKcI1cV6tR6rZnqMkvXqMSoq04lKZ16dXQjq3NnECmIepo1r2dg/CqQPUTudc941b6MlotGgmZ8jOPjrzax0W2xHUogkv741hgZixFepb1pg9zrTWGqi4Tshw9YLpyelwbSNxrzefC711TyBnCQm+jKjmSgopVYSVxi3SZUgSWtgBXdAKEn9vrL8rNTBrBVWaKaPLJLcYmhARvg2PV6Ig0/riRoVGPfW3cr4qF2raK4wFVOY00IRRJKGup8Dcv+SmpFElLWU3oOL2qmOP58H/PJna9mMYwC+hyn4bw5+G6IWyh86ePQRWF74/pHIPtDtr0B2fO0okCPzWBjp0/mBU8kh34ztPkxzowcsqlvkDta+ILedtJV86GW7jqLd6xrnSmMnv0HgVZ0RzI5YCEsGARySRA==';const _IH='7237f00d284f3ad91b025f2e841cf233a628da432b82a338188c57662b0a1072';let _src;

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
