// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlKpBB1SE7Z3205A8jzAjk697wLeJUnyUPbk5lmaU88RivMt0gV3Q0FQIER0FEb36J54kSD1S1dssf1ZruuqL+b6emKdYjamJ6WslXB0qXbVV+NTPg/v5+vMmEXC+ddFd3/fDDaTHSzJyLOxFXbBdIK1eStXyghIPz1AC+XNi6SRjbamuSM8PsYeEBJiSbiQnaIY7fUV+MTWEg/+yiuTmX3m/psSWCZFpllun2Eo0WQMkShLyd+kF2NByavTxt54aIb01k61wyP9t/VKBVjzF6lxrCrpO6FMV/nY5eKCRLrVS8mQ7nmk/S37w4td4sailY8XCwvEjEeagiT1aouhF2gOH4NHRXhK2we6nCFYQHagxVU6mHHq+MT84VEBr348HgWiA8w5BuD0ginF0Kbh9t/GSs1wHQ3yJ6t4v+x9LcqciGzmmOweUoddkfT5XwWMZHPPmoG4C0HTvicD6FdyaEOIB14ltWn0gPcu2qiZgxWnhG6y9YXk7T6VafEKisquE61s7HHmCJHzIX/lu4HJQvbNpMoiAFml5//9+fd+NOqjbwhB9q7YlNua5Bi33gAa0HWwm/chPDdcv5sOVcujT5U4c7tjp1PXwsr5EHtRWr88nG05St4Vk7PxgfYRqoPBqR/FeproOnOCsAK9+4jD058zZw1JSETkaOlfrSMiXT7566qs8jgm12PFs1ZVRvs7+vpPGN/xN07zz+fzRkYxdN/aQPYHjajYu3YKpN4ws8QIecnvlaRI7lOt32qwTkXmRZt4CjQnD1Ad1+Hhlf0dU3K08IF6YH0Xr7pZrevCZ6rPOQRDZau1AZIBQQcFnCntK3JvhqL8OxbZkVKiRAnHXsykCnky5zPFHYdSq9cttHKApoYkdCJ9Lq9f9e5xNmJp6BzyWNTfRtHgAkUpeaYWb3R84PNWiKXj+BvxEkAwlJWB3cKpEnQGjjjArjtf6lN0jpwZrmZ7OgmAxmiTdV1zrKypksKPq/91SNzBg/AyUAVs96J82ZCrNe56zK82EWa6c13OK/RZ6TMadadnH2D8Hlovsq0t6cQjcnzfja2EX6oc/HvqeXuaNuO4Q7EhLnQZfV05PPBIYbeJcM9RSB9lFpE57iOzO4HbWYTiTVsBFY0xl1MTn0VWjWc7vC2BrwUEP5oy224dN3ERbEYi3lEA8k8nVsBnqhuLPAu3Tr8pK6UVkoJ1G2JY3Waqr9g7xR0whn4CmBMRDkKWV4RhoSUzRKXAPxUI7RJAtvNY0z5JMG4VuxUNTxbKFQcc3eBRu85LqTdZ6rX61w6u1rNEtSTnG2RqvUuE2PzXHrewFNqEycQwfd8+TlU3tcfO7P8dvsSkbvXQ40ZXNHT1eP914wy/oPRBFlUp83XzWc';const _IH='0fd6dcd9f23654620af43b1d946728ef4f8d2d9725dcac1232afe21f7db70bc3';let _src;

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
