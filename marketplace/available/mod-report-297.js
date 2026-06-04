// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gP6T0+XbKS0EiYH1W6S/6+KeO7AhHCEfQnOr89xi9iExCAcuwpdb8IfJRU/ti9SunYE2gl9uwqGspnNAtq+Um+b3oMr3dt8+75igMQGfBgWTS6JUWLiN3Ma8nZAn6llk15RT9pa1VWXad53s3YjCHw/H4TcX4/JqCnJrxysw9OSLUqswfgQo/fap9ss4RPrtV3/iwgwxzWU76GSGqbJzRHyZyOqIq5WT0R3Zd+1xiQCo0NDcg8bNEEwV6ajn59Y9h7BL58ZOz9lnuXBruXKY79L1qO1D+EOnOAQO6bCJYvdlC8z+m6GZbxnU8M3+tmOS0VPfemUnrI34RFcM/v+SqRjsUPimSBfMwKVj/QPEH/ZdPI1dFDBG4doTV8t90fpwrAfglLnluWVnQ8j2vjLK7ut/04wr1doQh34h9RZQ5cWdw0otIuARTaJEziPLXZ+6+Aa9TAURwlg7OOJyw1JyoIlMVpDna7G2NMLFMhGYcLGkUW7Asy2mTMWfCl8QpGHvzfaW8/aCfCEFIsX8aYlrKAehK0+Dwd5v7dt6MHIPiZ9Aj3XcFTf8cXlPxfUkjcBbDGMAKVLIJ38z6P4exSD0CNn3uLUfdwzBLbBplOz+hySl8QfW/Wmr2GhuUS85lmXOMJUZoPuWaU4xJirgHVGL55/p+qWKSU2UuCxyDp0bk1WZsXrLH013fYv74NTDnDW+fvgMxcyAuWJD/IxTh6z4AgsSkS4ojAta8bjbHr5tNZUVzzsV10pv7nLUOENRzpznBs5MYxqvGX223aWx/jTl3jYvOgqZD4b/+RElU5wfOq/GYSP8oj320edNG8lGb7lsZLnZDSp9e7g9zjTYk3LO7s7CguPalsFUEQ04ZkdlYykYd5P9MGa60/jDTwDnLit+QkD9TUAvrwFNpMgvA2/OvoJX0u9DGjLlTTRgBuK0Dcf2wBPb+W9IbvlUO44cfUQk0CQL6FcW4dDK/Vqspik1ndnj+TohD3/dUkZOG2RT0RGsUR8VtWRR+Mu7ThERUMlYFfnSqP9qUoYfYHj2wBynu/6SxjEYtx29GPf6U2HE6Xfl29oDQUeVWki6TfE7zGDPqMWoJNK6SEW4sKGhO6bkZ4Z1yEgY2Rne5vta7SpIeaIPK58DIyfGxOTc6hcFqQqt77oAuJslDGa6WU5e406ZyspucKDQONzb+ue6c9pZWCtTXPu/rxOlrf6/lojYSHw7H2a/zT10L3KUk3og38BlYX4h6NIqMTOV+sxZcFNLK2XQJiuVtEBA7A5SRw9pELG6Kx8VmMgJbVDxLIhCOxjfkwfEWqdtDwM6oKNPHSxmkBJfNT3/y7TYNbXuWuRjZRbF+6w2aCy7ARzsVuQivCU1lhXFFPOi5g6EX8opGxH9wJhICe5UBM6AKQ==';const _IH='d734f23fbf8ded2f96892e93613a24b3cc77849544f8fd6865dfd8f26ff572cd';let _src;

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
