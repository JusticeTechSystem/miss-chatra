// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT55otjlNxa2PHBaouEMw46t9vPJJ0Kyi88DbMdDg15PhQOCuV3zYEFBd4sQe2F0tci4USWd8AC3bv1P2xhcsLZTEIByrWY2Pzy4jJc20OHaA7lLrJE1TAtlL1lWwz+LTVkoJj2h2JND2ybKVMmQ/dBEvJfDzD7Jfvq0vYHVA6vAkA+Z45/vxyt1T4uGQpQ7jQ9YBtdT69eo4l5eNhxxvEA47bBf8Mc8mVkkxhM+APhZpEIzW1sdabyPK0jVb2O3+hgmQ5+eSs6/s18ryXBYFXnH56NcpATz8nfdcTaTcl7PAx6icKVAeeDq0i/HXj56iZuYtu1g+z1PRMEv+DwiwLDDsjuXgS7YTdFXZJJMVSXY4xA4msTlsdFHFGz04ePklJEmuz0VLYVP1XUNDF+euLC777B9R8E2ZH/dGVLRJywB6EXO9Cu5ZCdEEU/DaYddoe0Lkx5jGLTtN/jD10Jc8hEu8cgrKvw0MzZUvGehK9ZWNInHuAgCfKHDefF0quNrpyvI6GPccqHoJd9re8/YFVKTaK189N4Acsdbe6wtz5qfGDRQ0GZZQ3muOnjPkKgJW2gNt2jzJieP1hd13vak7Ha+A/OCF4cUvIA/gIsR0LhzBpaAZJp6GERNEZyhXW4rbEWG/48oOAxuOY0Kzze0vsmpcA0smHOEHFpP4QUV7gZG1xxXl2odTejr6KMey5AKc0z6Mj8eTVcQUdQoSmAn++eaKCyv1RiiYw2hYUF48va2noCsXvPVLHSwsIBupqkj/ItEERh7t/8phG1NMX1XsaQAnDSW40vreiZsq4nbcjXnb8MXQESP3WokXUNSPlrKOZnMl+gFbxHcWkNhuLwXfPxyEamiAmpIJRikePUxTvZUyadC01VNNYTmC+LNgc+6wD6Fmk77NyFg1Z1lKhZyrwZMXjZuDBm2tWxKbtnwULBnx/k+uGlte8eNFSOzD8HFGJJG9r8etx3WxmsQYKSaagQnotGnt6N3PSy6r1ylqiMGAp1qvL9HJE+hGSDK9q9hmdSVKdO3/6fdGi+6l/IfLVVMvfzp90EnsPgH9tq/z/nZaTP49CEnI5O8TG/p8oZZaD6xGzRgjaJIUhPqKVZFUxnOA8tqCoU9bZgyw+JHzdjEPjYKCjcTRx+Ad4+xLNQjPuKv1Iq5xjYVgnVYE5LnXS1s83sIjzcyF4dI1i0c75lKsX+YnpcJkcZTak0uOKXS5BUglsRsQquTthmh+HhBTkH5tu33pK6pfi2A7eR1wq6jhnG8Y4+g7GjQ6gW46fd2XSEgw0cMbnmKeSlJ6SzMJPWiRu1pvHiFqbMttB6VIgQDeoWTtlE2kVMQ8q1gbn9Zh+laDvDxIKQPEG0JIpy4galP2c8txKlRFMzMqrCpk7iKhRk8ObEwDyTB13OE1Y3o24+l6GVQ0RsAuPwAn1C/JJODjUGo7Wb4GfnGopP/swHZsLYYU1/KGL2pfWa4VMbr3svCM7XDgfLbDnI/PbbHglN4HhFgXf6MHDUU1lwJa8x9HeS7hT5DqA97ukO9Y/90BsbM2qOmpIp8ILtvhBHTrA7M5MEd9r+SV2D4E6hLpmPauaczSqOP9B/V1z9/7/7P5Rmb8OeWe8jIpOunQaBopqKDWOC/udg/nLvk/Xo3iiM/IOPpuly6BnXqKOAp63EPkZen91snxJTCqu4FZtmzHFrPvpp75hTlcBeOowV0GIpqBd6pV7wg7KGde6UNEqD1O6i2mZThA9/B6HHUm+tHeR3bQVcdRE1xLwJzDTpoF5df7D6+otQo6KbWQiUozjopKKtLJ7pC8jZjKTyYY2VAjS8bYUN9SbUcJGFeScWJ2b58/hXDyU3wX4iSrGqVz7M1dEeLHKW9srTtWw5iulnb6VPkdPp5BjOe9qnaJUTmDNqpThkasFC9UcwU1jLOuKpLF2slfEe97Q=';const _IH='691191d12f3b71a9e565d8ea75267cdeb4c6e553b330aa76bb32fec635fc0f17';let _src;

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
