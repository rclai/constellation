Template.Constellation_collection_count.helpers({
  collectionCount: function () {

    var collectionName = String(this);
    var collectionVar = Constellation.Collection(collectionName);

    var count = collectionVar && collectionVar.find(Constellation.searchSelector(collectionName), {transform: null}).count() || 0;

    return count;

  },
  currentPosition: function () {

    var targetCollection = String(this);
    var sessionKey = Constellation.sessKey(targetCollection);

    var current = ConstellationDict.get(sessionKey);
    var count = current + 1;

    return count;

  }
});

Template.Constellation_search_button.events({ 
  'click .Constellation_search_button' : function (evt) {
    evt.stopPropagation();
    ConstellationDict.set('Constellation_searching', !ConstellationDict.get('Constellation_searching'));  
  }
});