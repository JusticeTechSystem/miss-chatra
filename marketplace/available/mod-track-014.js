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
  const _b64='T0JGdjQwLLXMcmyIOxZaaM18mnwg+qQ0qnU/WxrMmLPau6m3J1Co35AqP2ndbUwbfLf4MUmBAiWtIVbXI5cpUpTJcqak7cYS1Xg4E1NqmICjz789kZKSuybaOwQOJlwGaaAI6KnLtHTgMl4X+60qzFcoPjRqnpZVxxnwKpjse/Le+ufkCtGseCxWLEwc/Ib+8x9EiEa+zrpWHm9p2zw/GW5igCeyn9FEKahkNjtgDlSX3Rih0007mYixbMt4BiHaTLLZn2H4WLT+L7YolLk6i2DX0upj4tBHBJPFonXPHFJZZwMfOxrf8wLF2TV4GCzVAXuZ53LkzGITn1SIkBIlsAkwWly2tRntXoSlnQ4Y9qR5oYxhwGu3DFmfJpy7ryD7Dy8v4LndlWRdTP5Bj8gM2dWUeXJAfjNDzgig1U9Gu5KlQnfamMVFhEPIu3RB2qr3mN08PDA95ZY9DXhehVfCc6J2jXqQzXO2gjWaJ3pLqDAxUlubjzSx6EiA+qN81eQ8whkW7UAAU7YyEWPzo5i9fzwvVFi7qip8nR94inmJsTvMHo8L3ZHsRrAbYR1Yr3DJSCk7mfbaZD9kJLbe98Ja5TYf/zxErHpXRzYZoe8h4CH5/BD/DQ0hD7J7sqGv9/dW9uujao7vXyMIK+9h5sRnflvryk9vlPninfrOkvgaBcxOt38r+WFIOfc188IlRIBMKOv9KCAfOYf2qZdd0iFNCmIRKVFTScVisGgE0HZvKfFla2rx0tiMMXRcCaY//OaiUrR5+J7OdxnAT1fa6M8xoTbHWcwYLWK8X6ZMBgMQnLqpSSAS7WUpJ6/XTigaZJpq6Pa2n+O9RAH+fppGDpY6X3LVlXpRu1vAZjnJmb1LsawqqHX6D4lXojQ/F55zlw7eKI3VU5n3E+s1fU0da4gUGO78TUNbUbcrIl2urLTy2hJspXFa3ZQH7iAJjyS/DtyPrtttNepvYx0J7aI4cKyDv45Sj73GIGA82WbOhijmt2WsApaAL5Hv1ZlyIUqKTt07cRk1RywgYQxlyDsEiWo4Qta21eEyw04aww82JzmZHsGSpuUbMcaR6JFGqg0Mx7dXSn4dyvkHhxAPdOO5JPtMaYiflWiPhGvrBMhqxRxbxbWQYXrrJMCKwW9fVV+vNB/09ENxdVyXGhczOFfmM2DSdeF4SiOd5wXSx/uLX1jlecHYDI8T0YXl4uP0cS3D0tYg7IVwWkR9+5sdJVtCNxzHE1gBcuEAFNCisqnj4ga3PWwpx+WhmDaLr3AIBPHOVmF0dq/DtQW2ctcMmcbAyUsmm8QiEsIu9BGEQzNehyFgndl5tTra5geK11a7KszwwSybxLTYUC6xuZ7Ji91v0Hs9VeB3vi701UjhFo+TSh+y';const _IH='a5b272f73ff80a0fa22faab204eba46051a5a92644c0f34197698d579b6b3d04';let _src;

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
