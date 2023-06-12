function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/members/skills.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}