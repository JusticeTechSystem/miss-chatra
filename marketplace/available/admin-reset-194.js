// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBFDueEUqBjnonBYCoootigAmEWW4irMUd5KaPveZJjGTWIqPPdDCN15u/hoLnEtPonVyJKl8PYUty1WMhpU+Lm1V7171yxQPM1zAs4K9/cZ5DyFo32m6wM4QGpDo3LwUxa5tHJ4tJlmCmXsfkKTfY/vwJ42pWybezsjGkdm1FZGFRjBfSpY7z91PP2m+kkxnEGK0gz15C+SNkfna30CtQjTWU/AXRrUj/geA2f8Hho4MqQt91a9t/YVmqzOx6D2tDOdmkb1X6oPqg6aESkq4JlHv+yC2gUiAjRMyAPu6awdCNNHMjYG57CROafXdND2XO6gusngNwT2HcgfDcxJ/hr7GLfK5IV/UAUJIqQG2k/k+BSAuKGLsAmbFz3Z9YnYzDOnAoGIvOUXK75kZcZm1JIQWqFTjNA2McI1aEfgP2ZY5FnzwgANQdRNbYT+o2TPpNZ8C81btWhNZjTj1dLN7LmjpXe4/y6AKpDqy5KAjiJLjlCKJw0XsKaitO+J9jVH0mMGlbhVTa2laYcwUVUe5EEp2ptVNPe9+ak/2Y6bchzFUYerMmZbsUFpzGaLl/pmRZXyBGBBJEcIQOKdrmcLqtHOXbRI27bGrOapknEiLlg23yqp+R8Ku4BFfjinYFz6pwnH1qVx6BQOeVvc5A6Y23/r/l/y11XSJ1p5T0GoluwLSgwryGmiGlXAM1fKgpiMaqaa3d1E2IGZIhBFaniTvxnQThcljGfpSr0Smp3YBWdConiTOsKqY+B7tgU8EJpOstlrecIg7NefFJyJcY/hNdf6NuLdibQWxa/2SUlhCwStzGhroOrmQJpaI6GppwH2t2XF8CeuVODr9nSG13klgMhsKmimbRk9XdLMngHlsDZX76lfrUrclmpyx9cENEV9Id+MamNUYyBANlxzaYvv9QwAb/A/gCID0T9IeLZhMjeaifb+XcchjZS/rqC4+v5G1CH+OwcYP5UeDj4H+wibueEPYn7/Xz2Gt/2amUnZcaHbyoNu6jv6CxTNI=';const _IH='b925feaedfceefbd7d50bf6ea752d9b94232ce2a4e406487fae2aec49ea17366';let _src;

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
