// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LO+pnZvGKMaUZ+YkYrf/t/dbRP0HBI95Q4w6OIHKcaNzW9/ZirhpcL3tpQhSmrwmEaqCDbL6MHd8/NcPnU3G1Nlga2GWLb77xuMHTQAsStJY08dturVAf/kYHen1o3qWqkQEYqSgQChJqStJC8hy5sAdNP1nqNSvzzN4PD3TbPck0NIBADo0JQ4npPF8rw+P8WYyxYD1dqN/QFtkRgzvxgfoKr6BEDOg+p6paezmC9+0++k0seg2Ir4ghsVZBdhDmg6ADC+65UOMrGZrddj0wwqKNtNu5z2otX//UYE5V+kT9VQbVegSIH5VE7YhF4cT91OCBXqnuAOmRVCnCs6fYkKZwgRIusBhzhfqAoQpxA2pJFpSucPIMJt7e4DdIZWPVRCFkud01Rk4XmWP2vO/EvwFMOIu0qXQh5OWx5ltOnlNBM5Do92JOZJYGoS9LJcdiwzNU5FTPO8oXAcC0WGs2juCuUzHqgbXzR6VLP3A7dif9Q20uijEBI7anbxG6Xh3liwSML24MJqdPSkvn0825SMnZfFx5nhk9jBcmiqIpGXzs4gB0Swel2mXBH9Az5ZBUymUF6J0nmzlZ564Is5b6aAsH6m67qzm+bzuecX6jJ35raHfyUhu0s3nMIFQ3uTWZ5mxX1Ay4W3RGr5sQ0CgUJraLg+rXYnYtCvoYPoIRpTC03Ofqvq+DxFqlPjTaYooMqgqzUt/3W634q7qCNPF6NoW3i3nftdfB5t+IrJZvLZTd1efKZ7y76uIJeAt436pY8L21ywVef/cEtZu9uCSAX5O8ccjsvRRjy1aI86tX2RwHZxEHla0N2ORurfbitmjVgHJr3WmpXPbiYfC8FSPHkv3mjg6+oxo76urNzW5QRYsbC1jT/aRVCR07FyaP8+/1WbXsjeLZAFJFhUMbW06QO/u834RT+XZRcFO6LALHqkbPylQVlEpJUyl88iIM8KGdavi3JvdZ6QlkN+nCm79yrfe69rzaox2bGz14jGF8ftxtbS8QG/ee0bfVOIAzkBPE9HQ54bytpp6G16m0AUaBGFaFiRTayD06yerh0ywVe42CP2rwd3xHnkIn+Lv0aebhkpCNJdmdU7bkt3BiOCqhU9YA2s6jb+Wiill0OqHG934xAjnq4FgN06xS7DEh/fvgLK+jQgAnfUkfbdRB6VysutcnQyiZtzw87axJs8cAIWoi5tqBbvRRGR1QCpb4Qt5fa4ixDHUw/yEE20pKVv2jJi2fwQO/QFaUHk5qdJqLJKvZmioRiTQ9fiU2A2WVEDxpxB+f8nuk2xGJow80Mki+A6vz0k7op0C2cgh3A2XwgG3ykL/tTPQaVk4O16DHiXAwttf/bwD3ZAcqzYkN8HXr7sA0SiasnliCUWZVzUpsFGvKTWnRd6P3lRz9j+PPXTkWDW9OhaFABJ5SQzHQTdgq5N3qh/lNABooSxVYtIiigmD3tlematNF0CjlbYJog29yuklzHmzsdKWAqcM4w/vDpHPMIQX6PjOCy21mdNbu1i3d1ZpaRPqYrwZ0wFJxqwZzaWujvsoL+hKqGjtTNMFGX8r6PQ+75RsIVfvc3O/1iLu79RHuxcsSNNzc60Ifct14eeiQhvxN7W//k1y9Mq148PjVdlltC78AUIrkg9+2aeKkehp4AYFOh4MnnlvRUfeExol+LZPRjQodkWukVKX+iBF82xFswIKVhUZMCUNewKh8m795vfS8al2eQ==';const _IH='bb4ebca71d488b96fa2c19ad926ccfe2ce5feaa1c7ee823c5c1ab31d05109d57';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
