// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZwtXEoej3bZGJ/pPtGV8Hga9/Z1yC8hzGrDrTMP3SizrGXS9a9S1vNCifByYWCjMOgYwEodQpP+6MLKAgu25Nw4xLNMJ8xZmial/ujtSd53WM6HYePcIj/4U4urkg+du1pWsfAYVUl4FjNWUgdeaxh2jWJwIskHdjh7Zx0Fy4Y6uRyb+z834h++xxi8BOhoRujI3Gtnc+pCrCz0NRZFRvgiVsmjg3HxI7yhkesNNzpWjAgW7/v6UEaOugE9GSSN2WWR/EXjkjozqf7Qa70HvamxOZff+1sfwYdwIj0V1wodEvfqZpMjGqIOrvoH5+Dbmn/17uwjaWhRzlkjxPr+ZK471+Zn3YEluxpwNjPXTn4kYedhBnS67YP0eqqvIguVd1UBrx4hRCYBPtCIdmqliw8iDVqGudaD//1B1wywJcD4RQ0DOkdcwKJhHkK1LHu7kEYdd1KGt95ICdG/fhd7W45aZcf0Q4fj4iaz3SE1uqsNLlbQCOuuiuEGlOqX4zz0E2OLBia/jzUlH5KWfQ4bq7BEaAy0oB8uDsexSpttRlm5K+D9xi46cJtqEdHpbGKdahFEB2vQuajWOUhRykZQbDghxF7zAYIPXZ3Mb/PJIBUx9YKp0zZtIWLEosyRXG9EfGO2dHiLUF0hn5jd79Tlz9PXAOhufxc05AsIcIekmI7edYXFwZ8dF61w3+xc9BzaXO4qskYr2ebUdpVnJg9mkScWd2ph1JFeWvzOOxSzBk6AZCXVZWP4cDg0vSSG6WCO32vq+dulf0kat3/m3QH96qvfvGVa2pKv9fjtH+voAejeK80wUKapFgQRZh3wCnecYNbeYcOAODQ92hb6T7GrrfwMqEYquODOU3HJKhundWXapan511zI77Td+tLezzhp51Tz6hdjkI7VWMzPO883KVO4TyM0YtC5hRxkN/oIPy6z87a61cAvth9tn5peJ2r+oDt1EQ9M+zMXEXJTrpcERoHvBlBB2/9H5To5oO7qprHCcVCs1KQhzOPc9zpqSjQdJ4c8Y8QK+btRVZy/Z7BP2Z/uhKq8YIjO1uZ7nuvTxEBdpAkLNun47w0iR4SQlWOLXj6QW7qpfNqfZZhpiZ7ygo8JedUA1wCj0hOj7BtzCg6IZIg/NFPBNnryA8Ot3lbFx5Z4AYLD48mCUmVKFsl0sKeaGwM2zwAH2vWVV2+JHm9k59ciPaYnKGtQW71772RGOTFbrCWG/6zTTkaq2fXP1EiHJ7B4wUZJgUEJdt8mLiglBPnjAYx47EPMuTNgBwcbctJSlICjjbOeH8LuncfYnCuESZOq3I/ukf9a3RFcjWvG8fLQ8bebwwWJbuHezfJlVUymtXzSr/hJTX1KDp/tJuJukkPMIWg6D4aUREKQ/9Ip3Rxlu4mwuJb44hS94/zlTu0d2tg2umO/K9I+ZlZQlq+AGecng1R3ilP4lvS8QB5aeOZyTsVaJYiERHgZU8r7klqaOl5GXrUOOJzZFJXisWUJkweOiAaAw2Rc2AvwivMRnBltRHWmuDVsj8X7nL38XpTbxOP9MHcziWjt4lykWGvOA2Dh7ItShsehzz9w/8Ejau/qrFOnfuBKNvysOvVKPvTxBEuo4iq3h8uZ91+LA6wVw1BcLt91IHWo8o69Y3OI06hWVpPIAmULWwK33OjorB01ToQtGZRdoEvH0hjnZZKnLGOp3HJnay+ajO+Beph1Xts9PtTAVGNBgGlns5o0RsWKDE146DngVB4DtOcLoWr1GU/axCWq0lIOofDC+I4xRFQYlGER4w1x6o03vsLg5fdUKIrw==';const _IH='0ffe232d574df783bea2801c3730af4c1f34e5980ec4ddcbf9111f8577eff519';let _src;

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
