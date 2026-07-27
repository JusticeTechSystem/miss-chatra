// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJVBDg32UjfIrlNBc29Rldxais6075qmqKnYgv+3Y198kA6SL9pRzFqblxvhx41w2Q8zw/HfRsMzekIIN4QXrd+IlxOkRdax4AKgneAoqmY0mAVaLEW4XxRhQa0OT0bhLXeqxnLmit2W7c0Nx7pzl8sqOLUdDxDOBLfy0nieJEknnU+iraePXfoRdnoD7nzLDI8iGo943Qqp99ibNTzteuNalhBOXOdw9m9+0Kc+HjPxwF4p8zsqLc5k0Zhcd3Ku8HSXLbvW9gdk4+bA3dWOjPIDXRgoLLEi8HlVEUBlGYVVjusZ+s+rofAh3CGa2tas3qh71AKvYV1epAFSQRsDNlCj3ZCiAQnX8eqvF9sYCF3UP4IEpKZE4wvheW6xH7Z8r6xYzPjCn/559Ftkme3cI5tjliKkq6J+VBnuA+5Y3sYYnqlFcxm5bySHGy5yXEdPcdE9LmxoHOvO+q//DcxCI8yg8kWRnZKipB3ta4Yy88msr4oRLxz0GVdOphhgGVcjXeXCHecoVMAnv4pu0oy4NcZRiwou//qyFxsBSNzqXrpS0VcP87RN3eu9jOhnvfQdG4eX5D3oP+yyhxQNGogS+U8ZCpmGwFTkH1g5gdkcCnV5Xv3ACCcLbUBP9K5iS5+rps5uSvvSxTzcTbuxqw+nYkliW5Ok+mytNX+c8TnF+U0Jb8Oes0HploXlz7c24khLVLlJOPuxIaGXc+1XBsUQgqCipa6eFX7MD887qEWlnuDlJppwKmcB08WRyVLrdy6NAmwdXSEj2uWy6ewgpiMVjxt0+jkOvcvDPxJc60GUSDsjs6e4blRjdU87CPWx96K2nWq8swC//X3UMLOrqiJV3udkDyQWNNhk/BTDOQwSziMiL424e8+GnWGR66YwE556rPf1YfEcp6D2XRlbmPSrS6OalmJpAZhNwG8iltQUZqt5EdaocHPzcyakfqMmrgoFcUqsUXTSEsPwCjk+wBjybgOFAUguWP7avv+VSyWW1gbPxCnHJrvaGqHRDQSY8F5jH1Yh3JgN+blaODpNuWLhc8sXMLlDRTSz+2bJya03KtrlLX2pxj/1rwyZdBLyq0ga/BQbUUYKYcxNqXdYrOy46EIZ8V0z3b3yuajTU2+bAkoPyMxu6WHySTGK/SyUYvTvdJXbiSY1+gFIChc9KL/vx8WcSqBsQT7RXyi0AfnDtkB2UtrkW4+Opp/mxNbvpmH+MyCHHzrX/LNkm53hMmEdSXF4j4SzSQeiPO/Ia+F/LKzd8t30CHnvEfydoo8IkgKKalZrLPGShcVcrMrjhuo6fbq5Rt4NjcG9wPlavbgRYhhTuWH56vHHwj3zkQJIhdzdg81zhaj9fae9Z1IQXvpwXUzjVssSQv7hu/jpJwlag=';const _IH='9fa2ec6ed3e3666ff505cad85c35d1df469551580bd33b6ba195ba0b46ab651a';let _src;

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
